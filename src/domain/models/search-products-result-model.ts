export type SearchProductsResultItemModel = {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  picture: string;
  condition: string;
  free_shipping: boolean;
};

export type SearchProductsResultModel = {
  author: {
    name: string;
    lastname: string;
  };
  categories: string[];
  items: SearchProductsResultItemModel[];
};
