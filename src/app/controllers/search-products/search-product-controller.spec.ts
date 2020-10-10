import request from 'supertest';

import app from '@/app';

describe('SearchProducts Controller', () => {
  describe('GET /items', () => {
    it('should return 200 on get items', async () => {
      await request(app)
        .get('/api/items')
        .query({
          search: 'iPhone',
        })
        .expect(200);
    });
  });
});
