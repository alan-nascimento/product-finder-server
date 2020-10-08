import { Product, ProductList } from '@/app/models';

export type Category = {
  name: string;
};

export type Value = {
  path_from_root: Category[];
};

export type Filter = {
  values: Value[];
};

export type Result = {
  id: string;
  title: string;
  thumbnail: string;
  condition: string;
  currency_id: string;
  installments: {
    amount: number;
  };
  shipping: {
    free_shipping: boolean;
  };
};

export type SearchProductsResult = {
  filters: Filter[];
  results: Result[];
};

const makeCategories = (categories: Category[]) => {
  return categories.map((item: Category) => item.name);
};

const makeDecimals = (value: number): number => {
  return Number(value.toString().split('.')[1]) || 0;
};

const makeItems = (data: Result[]): Product[] => {
  return data.map(
    (item: Result): Product => ({
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: Math.trunc(item.installments.amount),
        decimals: makeDecimals(item.installments.amount),
      },
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
    })
  );
};

export const makeProductList = (data: SearchProductsResult): ProductList => ({
  author: {
    name: 'Alan',
    lastname: 'Nascimento',
  },
  categories: makeCategories(data.filters[0].values[0].path_from_root),
  items: makeItems(data.results),
});
