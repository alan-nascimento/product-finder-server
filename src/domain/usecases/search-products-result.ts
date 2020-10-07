import { HttpResponse } from '@/data/protocols';
import { SearchProductsResultModel } from '@/domain/models';

export interface SearchProductsResult {
  search: () => Promise<HttpResponse<SearchProductsResult.Model>>;
}

export namespace SearchProductsResult {
  export type Model = SearchProductsResultModel;
}
