import { ok, serverError } from '@/presentation/helpers/http/http-helper';
import { SearchProductsResult } from '@/domain/usecases';
import { HttpClient, HttpResponse } from '@/data/protocols';

export class SearchProductsController implements SearchProductsResult {
  constructor(
    private readonly url: string,
    private readonly params: string,
    private readonly httpClient: HttpClient<SearchProductsResult.Model>
  ) {}

  async search(): Promise<HttpResponse<SearchProductsResult.Model>> {
    try {
      const httpResponse = await this.httpClient.request({
        url: this.url,
        method: 'GET',
        params: this.params,
      });

      return ok(httpResponse.body);
    } catch (err) {
      return serverError(err);
    }
  }
}
