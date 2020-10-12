import { getDecimals } from '@/utils/numbers';
import { Product, ProductList } from '@/app/models';
import { getProductDetail, search } from '@/services';
import { Category, SearchProductsResult } from '@/app/protocols';

export const getProducts = async (query: string): Promise<ProductList> => {
  const data: SearchProductsResult = await search(query);

  const getCategories = (categories: Category[]) => {
    return categories?.map((item: Category) => item.name);
  };

  const getImage = (item: {
    thumbnail: string;
    pictures: { url: string }[];
  }) => {
    if (item?.pictures && item.pictures.length > 0) return item.pictures[0].url;
    return item.thumbnail;
  };

  const items: Product[] = [];

  const itemsPromise = data.results.map(async (item) => {
    const detail = await getProductDetail(item.id);

    items.push({
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: Math.trunc(item.price),
        decimals: getDecimals(item.price),
      },
      picture: getImage(detail) || item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
      state: item.address.state_name,
    });
  });

  await Promise.all(itemsPromise);

  return {
    author: {
      name: 'Alan',
      lastname: 'Nascimento',
    },
    categories: getCategories(data.filters[0]?.values[0].path_from_root),
    items,
  };
};
