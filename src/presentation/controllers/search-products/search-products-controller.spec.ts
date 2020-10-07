import faker from 'faker';

import { HttpClientSpy } from '@/data/test';
import { HttpStatusCode } from '@/data/protocols';
import { mockSearchProductsResultModel } from '@/presentation/test';

import { serverError } from '@/presentation/helpers/http/http-helper';
import { SearchProductsController } from './search-products-controller';

type SutTypes = {
  sut: SearchProductsController;
  httpClientSpy: HttpClientSpy;
};

const makeSut = (params: string, url = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy();
  const sut = new SearchProductsController(url, params, httpClientSpy);

  return {
    sut,
    httpClientSpy,
  };
};

describe('SearchProductsController', () => {
  it('should call HttpClient with correct URL, Param and Method', async () => {
    const url = faker.internet.url();
    const params = faker.random.words();

    const { sut, httpClientSpy } = makeSut(params, url);

    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: mockSearchProductsResultModel(),
    };

    await sut.search();

    expect(httpClientSpy.url).toBe(url);
    expect(httpClientSpy.method).toBe('GET');
    expect(httpClientSpy.params).toBe(params);
  });

  it('should throw ServerError if HttpClient returns any error', async () => {
    const params = faker.random.words();
    const { sut, httpClientSpy } = makeSut(params);

    jest
      .spyOn(httpClientSpy, 'request')
      .mockImplementationOnce(() => Promise.reject(new Error()));

    const promise = await sut.search();

    expect(promise).toEqual(serverError(new Error()));
  });
});
