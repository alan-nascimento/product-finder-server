export type HttpMethod = 'GET';

export type HttpRequest = {
  url: string;
  method: HttpMethod;
  params: string;
};

export interface HttpClient<T = any> {
  request: (data: HttpRequest) => Promise<T>;
}
