import faker from 'faker';

import { HttpClientSpy } from '@/data/test';
import { HttpStatusCode } from '@/data/protocols';
import { mockSearchProductsResultModel } from '@/presentation/test';

import { SearchProductsController } from './search-products-controller';

type SutTypes = {
  sut: SearchProductsController;
  httpClientSpy: HttpClientSpy;
};

const makeSut = (url = faker.internet.url(), params: string): SutTypes => {
  const httpClientSpy = new HttpClientSpy();
  const sut = new SearchProductsController(url, params, httpClientSpy);

  return {
    sut,
    httpClientSpy,
  };
};

describe('SearchProductsController', () => {
  it('should call HttpClient with correct URL and Method', async () => {
    const url = faker.internet.url();
    const params = faker.random.words();

    const { sut, httpClientSpy } = makeSut(url, params);

    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: mockSearchProductsResultModel(),
    };

    await sut.search();

    expect(httpClientSpy.url).toBe(url);
    expect(httpClientSpy.method).toBe('GET');
    expect(httpClientSpy.params).toBe(params);
  });
});
