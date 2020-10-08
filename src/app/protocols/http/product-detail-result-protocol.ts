export type Picture = {
  url: string;
};

export type Item = {
  id: string;
  title: string;
  price: number;
  currency_id: string;
  condition: string;
  pictures: Picture[];
  sold_quantity: number;
  shipping: {
    free_shipping: boolean;
  };
};

export type ProductDetailResult = {
  item: Item;
  description: {
    plain_text: string;
  };
};
