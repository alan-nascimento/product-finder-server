import { SearchProductsResultModel } from '@/domain/models';

export interface SearchProductsResult {
  search: () => Promise<SearchProductsResult.Model>;
}

export namespace SearchProductsResult {
  export type Model = SearchProductsResultModel;
}
