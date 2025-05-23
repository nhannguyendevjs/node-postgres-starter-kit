export const GeneralConfigs = {
  HOSTNAME: process.env.HOSTNAME,
  HOST_IP: process.env.HOST_IP,
  HOST_PORT: process.env.HOST_PORT,
  APP_DOMAIN: process.env.APP_DOMAIN,
  APP_VERSION: process.env.APP_VERSION,
  API_VERSION: process.env.API_VERSION,
  APP_ENV: process.env.APP_ENV,
};

export const RequestConfigs = {
  ENABLE_REQUEST: process.env.ENABLE_REQUEST,
  REQUEST_TIMEOUT: process.env.REQUEST_TIMEOUT,
};

export const LoggerConfigs = {
  ENABLE_LOGGER_CONSOLE: process.env.ENABLE_LOGGER_CONSOLE,
  ENABLE_LOGGER_FILE: process.env.ENABLE_LOGGER_FILE,
  ENABLE_LOGGER_POSTGRES: process.env.ENABLE_LOGGER_POSTGRES,
};

export const JWTConfigs = {
  JWT_ALGORITHM: process.env.JWT_ALGORITHM,
  JWT_ACCESS_TOKEN_SECRET: process.env.JWT_ACCESS_TOKEN_SECRET,
  JWT_REFRESH_TOKEN_SECRET: process.env.JWT_REFRESH_TOKEN_SECRET,
  JWT_ACCESS_TOKEN_EXPIRATION_TIME: process.env.JWT_ACCESS_TOKEN_EXPIRATION_TIME,
  JWT_REFRESH_TOKEN_EXPIRATION_TIME: process.env.JWT_REFRESH_TOKEN_EXPIRATION_TIME,
};

export const RedisConfigs = {
  ENABLE_REDIS: process.env.ENABLE_REDIS,
  REDIS_HOST: process.env.REDIS_HOST,
  REDIS_PORT: process.env.REDIS_PORT,
};

export const BullMQConfigs = {
  ENABLE_BULLMQ: process.env.ENABLE_BULLMQ,
  BULLMQ_ADMIN_PATH: process.env.BULLMQ_ADMIN_PATH,
};

export const PostgresConfigs = {
  ENABLE_POSTGRES: process.env.ENABLE_POSTGRES,
  POSTGRES_URI: process.env.POSTGRES_URI,
};

export const PrismaConfigs = {
  ENABLE_PRISMA: process.env.ENABLE_PRISMA,
  PRISMA_DATABASE_URL: process.env.PRISMA_DATABASE_URL,
};

export const bootstrap = async () => {
  console.log(`{"level":"info","message":"App Config is ready to use","timestamp":"${new Date().toISOString()}"}`);
};
