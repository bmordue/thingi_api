import { auth } from '../client/api/auth';
import request from 'supertest';
import { app } from '../client/api/app';

jest.mock('../client/api/auth');

describe('Authorization process', () => {
  it('should redirect to Thingiverse', async () => {
    const response = await request(app).get('/auth/thingiverse');
    expect(response.status).toBe(302);
    expect(response.headers.location).toMatch(/^https:\/\/www.thingiverse.com\/login\/oauth\/authorize/);
  });

  it('should exchange code for access token', async () => {
    const fakeToken = 'fakeToken';
    auth.requestToken.mockResolvedValue(fakeToken);

    const response = await request(app).get('/auth/thingiverse/callback').query({ code: 'fakeCode' });
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ access_token: fakeToken });
  });

  it('should make authenticated requests to the API', async () => {
    const fakeResponse = { id: 'fakeId', name: 'fakeName' };
    auth.request.mockResolvedValue(fakeResponse);

    const response = await request(app).get('/me');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(fakeResponse);
  });
});
