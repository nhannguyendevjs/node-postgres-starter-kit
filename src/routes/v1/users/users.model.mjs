import { UserUpdatedSchema } from '../../../schemas/users.schema.mjs';
import * as PostgresService from '../../../services/postgres/postgres.mjs';

const getUsers = async (req) => {
  try {
    const query = req.body.query;
    const users = await PostgresService.client.$queryRaw`SELECT * FROM users`;

    return users.map((user) => {
      delete user.accountId;
      return user;
    });
  } catch (error) {
    return {
      success: false,
      error,
    };
  }
};

const readUser = async (req) => {
  try {
    const query = req.body.query;
    const user = (await PostgresService.client.query('SELECT * FROM users WHERE $1', [query])).rows[0];
    delete user.accountId;

    return user;
  } catch (error) {
    return {
      success: false,
      error,
    };
  }
};

const updateUser = async (req) => {
  try {
    const { query, data } = req.body;

    const { success, error } = UserUpdatedSchema.safeParse(data);

    if (success && query) {
      const user = await PostgresService.client.query('UPDATE users SET $1 WHERE $2 RETURNING *', [query, data]).rows[0];
      delete user.accountId;

      return user;
    } else {
      throw error;
    }
  } catch (error) {
    return {
      success: false,
      error,
    };
  }
};

const deleteUser = async (req) => {
  try {
    const query = req.body.query;
    const user = (await PostgresService.client.query('DELETE FROM users WHERE $1 RETURNING *', [query])).rows[0];
    delete user.accountId;

    return user;
  } catch (error) {
    return {
      success: false,
      error,
    };
  }
};

export { deleteUser, getUsers, readUser, updateUser };
