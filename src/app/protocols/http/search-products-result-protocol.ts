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
