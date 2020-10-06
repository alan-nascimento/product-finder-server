import faker from 'faker';

import {
  HttpClient,
  HttpRequest,
  HttpResponse,
  HttpStatusCode,
} from '@/data/protocols';

export const mockHttpRequest = (): HttpRequest => ({
  url: faker.internet.url(),
  method: faker.random.arrayElement(['GET']),
  params: faker.random.word(),
});

export class HttpClientSpy<T = any> implements HttpClient<T> {
  url?: string;

  method?: string;

  params?: string;

  response: HttpResponse<T> = {
    statusCode: HttpStatusCode.ok,
  };

  async request(data: HttpRequest): Promise<HttpResponse<T>> {
    this.url = data.url;
    this.method = data.method;
    this.params = data.params;

    return this.response;
  }
}
