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
  price: number;
  shipping: {
    free_shipping: boolean;
  };
  address: {
    state_name: string;
  };
};

export type SearchProductsResult = {
  filters: Filter[];
  results: Result[];
};
