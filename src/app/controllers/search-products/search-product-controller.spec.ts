import faker from 'faker';
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

    it('should return an empty object if has no products', async () => {
      const invalidSearchParam = faker.random.uuid();

      await request(app)
        .get(`/api/items`)
        .query({
          search: invalidSearchParam,
        })
        .expect((item) => {
          expect(item.body).toEqual({});
        });
    });
  });
});
