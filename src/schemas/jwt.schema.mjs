import zod from 'zod';

const JwtSignPayloadSchema = zod.object({
  userId: zod.string(),
  username: zod.string(),
  password: zod.any(),
});

export { JwtSignPayloadSchema };
