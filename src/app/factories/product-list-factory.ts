import { Product, ProductList } from '@/app/models';
import { Category, Result, SearchProductsResult } from '@/app/protocols';

export const makeProductList = (data: SearchProductsResult): ProductList => {
  const makeCategories = (categories: Category[]) => {
    return categories?.map((item: Category) => item.name);
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
          amount: Math.trunc(item.price),
          decimals: makeDecimals(item.price),
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
        state: item.address.state_name,
      })
    );
  };

  return {
    author: {
      name: 'Alan',
      lastname: 'Nascimento',
    },
    categories: makeCategories(data.filters[0]?.values[0].path_from_root),
    items: makeItems(data.results),
  };
};
