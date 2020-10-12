import { getProduct } from '@/services';
import { getDecimals } from '@/utils/numbers';
import { ProductDetail } from '@/app/models';
import { ProductDetailResult } from '@/app/protocols';

export const getProductDetail = async (id: string): Promise<ProductDetail> => {
  const { item, description }: ProductDetailResult = await getProduct(id);

  const conditions = new Map([
    ['new', 'Nuevo'],
    ['not_specified', 'No especificado'],
    ['used', 'Usado'],
  ]);

  return {
    author: {
      name: 'Alan',
      lastname: 'Nascimento',
    },
    item: {
      id: item.id,
      title: item.title,
      price: {
        amount: Math.trunc(item.price),
        currency: item.currency_id,
        decimals: getDecimals(item.price),
      },
      picture: item.pictures[0].url,
      condition: <string>conditions.get(item.condition),
      sold_quantity: item.sold_quantity,
      free_shipping: item.shipping.free_shipping,
      description: description.plain_text,
    },
  };
};
