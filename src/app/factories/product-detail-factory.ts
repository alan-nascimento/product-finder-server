import { ProductDetail } from '@/app/models';
import { ProductDetailResult } from '@/app/protocols';

export const makeProductDetail = ({
  item,
  description,
}: ProductDetailResult): ProductDetail => {
  const makeDecimals = (value: number): number => {
    return Number(value.toString().split('.')[1]) || 0;
  };

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
        decimals: makeDecimals(item.price),
      },
      picture: item.pictures[0].url,
      condition: item.condition,
      sold_quantity: item.sold_quantity,
      free_shipping: item.shipping.free_shipping,
      description: description.plain_text,
    },
  };
};
