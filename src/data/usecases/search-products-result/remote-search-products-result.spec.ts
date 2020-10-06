import faker from 'faker';

import { HttpStatusCode } from '@/data/protocols';
import {
  HttpClientSpy,
  mockRemoteSearchProductsResultModel,
} from '@/data/test';

import { RemoteSearchProductsResult } from './remote-search-products-result';

type SutTypes = {
  sut: RemoteSearchProductsResult;
  httpClientSpy: HttpClientSpy;
};

const makeSut = (url = faker.internet.url(), params: string): SutTypes => {
  const httpClientSpy = new HttpClientSpy();
  const sut = new RemoteSearchProductsResult(url, params, httpClientSpy);

  return {
    sut,
    httpClientSpy,
  };
};

describe('RemoteSearchProductsResult', () => {
  it('should call HttpClient with correct URL and Method', async () => {
    const url = faker.internet.url();
    const params = faker.random.words();

    const { sut, httpClientSpy } = makeSut(url, params);

    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: mockRemoteSearchProductsResultModel(),
    };

    await sut.search();

    expect(httpClientSpy.url).toBe(url);
    expect(httpClientSpy.method).toBe('GET');
    expect(httpClientSpy.params).toBe(params);
  });
});
