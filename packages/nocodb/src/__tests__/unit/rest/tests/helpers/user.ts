import request from 'supertest';
import User from '../../../../../lib/models/User';

const defaultUserArgs = {
  email: 'test@example.com',
  password: 'A1234abh2@dsad',
};

const createUser = async (app, userArgs = {}) => {
  const args = { ...defaultUserArgs, ...userArgs };
  const response = await request(app)
    .post('/api/v1/auth/user/signup')
    .send(args);
  const user = User.getByEmail(args.email);
  return { token: response.body.token, user };
};

export { createUser, defaultUserArgs };
