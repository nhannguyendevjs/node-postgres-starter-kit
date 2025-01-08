import { PostgresConfigs, PrismaConfigs } from './app.config.mjs';
import { Logger } from './services/logger/logger.mjs';
import * as PostgresService from './services/postgres/postgres.mjs';
import * as PrismaService from './services/prisma/prisma.mjs';

const cleanUp = async (eventType, eventDetails) => {
  Logger.log('info', `Server is stop from event::${eventType}`, eventDetails);

  if (PostgresConfigs.ENABLE_POSTGRES) {
    await PostgresService.disconnect();
    Logger.log('info', `Postgres connections closed`);
  }

  if (PrismaConfigs.ENABLE_PRISMA) {
    await PrismaService.disconnect();
    Logger.log('info', `Prisma connection closed`);
  }

  process.exit();
};

export { cleanUp };

