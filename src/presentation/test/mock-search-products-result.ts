import faker from 'faker';

import {
  SearchProductsResultModel,
  SearchProductsResultItemModel,
} from '@/domain/models';

export const mockSearchProductsResulItemModel = (): SearchProductsResultItemModel => ({
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

export const mockSearchProductsResultModel = (): SearchProductsResultModel => ({
  author: {
    name: faker.name.firstName(),
    lastname: faker.name.lastName(),
  },
  categories: faker.random.arrayElements(),
  items: [
    mockSearchProductsResulItemModel(),
    mockSearchProductsResulItemModel(),
    mockSearchProductsResulItemModel(),
    mockSearchProductsResulItemModel(),
  ],
});
