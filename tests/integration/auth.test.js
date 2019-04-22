const { User } = require('../../models/user');
const request = require('supertest');

describe('auth middleware', () => {
  beforeEach(() => {
    server = require('../../index');
  });
  afterEach(async () => {
    await User.deleteMany({});
    await server.close();
  });

  let token;
  let user = { username: 'pawel', email: 'pawel@wp.pl', password: '12345' };

  const exec = () => {
    return request(server)
      .get('/api/users/me')
      .set('x-auth-token', token)
      .send(user);
  };

  beforeEach(() => {
    token = new User().generateAuthToken();
  });

  it('should return 401 if no token is provided', async () => {
    token = '';

    const res = await exec();

    expect(res.status).toBe(401);
  });

  it('should return 400 if token is invalid', async () => {
    token = 'a';

    const res = await exec();

    expect(res.status).toBe(400);
  });

  it('should return 200 if token is valid', async () => {
    var res = await request(server)
      .post('/api/users')
      .send(user);

    token = res.headers['x-auth-token'];

    res = await exec();

    expect(res.status).toBe(200);
  });
});
