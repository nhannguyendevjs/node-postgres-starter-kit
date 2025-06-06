import { createBullBoard } from '@bull-board/api';
import { BullMQAdapter } from '@bull-board/api/bullMQAdapter.js';
import { ExpressAdapter } from '@bull-board/express';
import { Queue, QueueEvents, Worker } from 'bullmq';
import { BullMQConfigs } from '../../app.config.mjs';
import { Logger } from '../logger/logger.mjs';
import { sampleEventHandler } from './event-handlers/sample-event-handler.mjs';
import { sampleProcessor } from './processors/sample-processor.mjs';
import { connection as redisConnection } from '../redis/redis.mjs';

const appQueue = (() => {
  if (!BullMQConfigs.ENABLE_BULLMQ) {
    return;
  }

  return new Queue('App Queue', { redisConnection });
})();

const serverAdapter = (() => {
  if (!BullMQConfigs.ENABLE_BULLMQ) {
    return;
  }

  return new ExpressAdapter();
})();

const addJobs = async (jobs = []) => {
  if (jobs.length > 0) {
    for (const job of jobs) {
      const { name, data, opts } = job;
      await appQueue.add(name, data, opts);
    }
  }
};

const worker = (() => {
  if (!BullMQConfigs.ENABLE_BULLMQ || !redisConnection) {
    return;
  }

  return new Worker(
    'App Queue',
    async (job) => {
      switch (job.name) {
        case 'initial':
          Logger.log('info', job.data.message);
          break;
        case 'sample-processor':
          sampleProcessor(job);
          break;
        default:
          Logger.log('info', JSON.stringify(job.data));
          break;
      }
    },
    { redisConnection }
  );
})();

const queueEvents = (() => {
  if (!BullMQConfigs.ENABLE_BULLMQ || !redisConnection) {
    return;
  }

  return new QueueEvents('App Queue', { redisConnection });
})();

const bootstrap = async () => {
  if (!BullMQConfigs.ENABLE_BULLMQ) {
    return;
  }
  serverAdapter.setBasePath(`/api/v1${BullMQConfigs.BULLMQ_ADMIN_PATH}`);

  createBullBoard({
    queues: [new BullMQAdapter(appQueue)],
    serverAdapter,
  });

  queueEvents.on('waiting', ({ jobId }) => {
    Logger.log('info', `A job with ID ${jobId} is waiting`);
  });
  queueEvents.on('active', ({ jobId, prev }) => {
    (async () => {
      Logger.log('info', `Job ${jobId} is now active; previous status was ${prev}`);
      const job = await appQueue.getJob(jobId);
      await sampleEventHandler(job);
    })();
  });
  queueEvents.on('completed', ({ jobId, returnvalue }) => {
    (async () => {
      Logger.log('info', `${jobId} has completed and returned ${returnvalue}`);
      const job = await appQueue.getJob(jobId);
      await job.updateProgress(100);
    })();
  });
  queueEvents.on('failed', ({ jobId, failedReason }) => {
    Logger.log('info', `${jobId} has failed with reason ${failedReason}`);
  });

  Logger.log('info', `BullMQ is ready to use`);
};

export { addJobs, bootstrap, serverAdapter };
