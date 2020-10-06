import { HttpClient } from '@/data/protocols';
import { SearchProductsResult } from '@/domain/usecases';

export class RemoteSearchProductsResult implements SearchProductsResult {
  constructor(
    private readonly url: string,
    private readonly params: string,
    private readonly httpClient: HttpClient<SearchProductsResult.Model>
  ) {}

  async search(): Promise<SearchProductsResult.Model> {
    await this.httpClient.request({
      url: this.url,
      method: 'GET',
      params: this.params,
    });

    return Promise.resolve(null);
  }
}
