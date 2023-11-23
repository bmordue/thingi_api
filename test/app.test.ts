import request from 'supertest';
import { app } from '../client/api/app';

describe('Express app', () => {
  it('should be created correctly', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });

  it('should have correct Thingiverse API credentials', () => {
    const thingiverse = app.get('thingiverse');
    expect(thingiverse.clientId).toBe(process.env.THINGIVERSE_CLIENT_ID);
    expect(thingiverse.clientSecret).toBe(process.env.THINGIVERSE_CLIENT_SECRET);
  });

  it('should start the server successfully', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });
});
