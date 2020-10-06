import axios, { AxiosResponse } from 'axios';

import { HttpRequest, HttpClient, HttpResponse } from '@/data/protocols';

export class AxiosHttpClient implements HttpClient {
  async request(data: HttpRequest): Promise<HttpResponse> {
    let response: AxiosResponse;

    try {
      response = await axios.request({
        url: data.url,
        method: data.method,
        params: data.params,
      });
    } catch (err) {
      response = err.response;
    }

    return {
      statusCode: response.status,
      body: response.data,
    };
  }
}
