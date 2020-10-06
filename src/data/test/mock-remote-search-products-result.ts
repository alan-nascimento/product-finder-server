import faker from 'faker';

import {
  SearchProductsResultModel,
  SearchProductsResultItemModel,
} from '@/domain/models';

export const mockRemoteSearchProductsResulItemtModel = (): SearchProductsResultItemModel => ({
  id: faker.random.uuid(),
  title: faker.random.words(),
  price: {
    currency: faker.random.word(),
    amount: faker.random.number(),
    decimals: faker.random.number(),
  },
  picture: faker.internet.url(),
  condition: faker.random.word(),
  free_shipping: faker.random.boolean(),
});

export const mockRemoteSearchProductsResultModel = (): SearchProductsResultModel => ({
  author: {
    name: faker.name.firstName(),
    lastname: faker.name.lastName(),
  },
  categories: faker.random.arrayElements(),
  items: [
    mockRemoteSearchProductsResulItemtModel(),
    mockRemoteSearchProductsResulItemtModel(),
    mockRemoteSearchProductsResulItemtModel(),
    mockRemoteSearchProductsResulItemtModel(),
  ],
});
