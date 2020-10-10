import request from 'supertest';

import app from '@/app';

describe('ProductDetail Controller', () => {
  describe('GET /items/:id', () => {
    it('should return 200 on get items', async () => {
      await request(app).get('/api/items/MLU468143025').expect(200);
    });
  });
});
