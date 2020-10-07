import { Product, ProductList } from '@/app/models';

export const makeProductList = (data: any): ProductList => {
  const makeCategories = (data: any) => data.map((item: any) => item.name);

  const getDecimals = (value: number): number => {
    if (Math.floor(value) === value) return 0;

    return Number(value.toString().split('.')[1]) || 0;
  };

  const makeItems = (data: any): Product[] => {
    return data.map((item: any) => ({
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: Math.trunc(item.installments.amount),
        decimals: getDecimals(item.installments.amount),
      },
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
    }));
  };

  return {
    author: {
      name: 'Alan',
      lastname: 'Nascimento',
    },
    categories: makeCategories(data.filters[0].values[0].path_from_root),
    items: makeItems(data.results),
  };
};
