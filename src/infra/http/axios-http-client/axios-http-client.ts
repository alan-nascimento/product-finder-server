import axios from 'axios';

import { HttpRequest, HttpClient } from '@/data/protocols';

export class AxiosHttpClient implements HttpClient {
  async request(data: HttpRequest): Promise<void> {
    await axios.request({
      url: data.url,
      method: data.method,
      params: data.params,
    });
  }
}
