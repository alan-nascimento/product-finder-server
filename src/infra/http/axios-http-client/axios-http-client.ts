import axios from 'axios';

import { HttpRequest, HttpClient, HttpResponse } from '@/data/protocols';

export class AxiosHttpClient implements HttpClient {
  async request(data: HttpRequest): Promise<HttpResponse> {
    const response = await axios.request({
      url: data.url,
      method: data.method,
      params: data.params,
    });

    return {
      statusCode: response.status,
      body: response.data,
    };
  }
}
