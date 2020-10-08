import { Author, Product } from '@/app/models';

export type ProductList = {
  author: Author;
  categories: string[];
  items: Product[];
};
