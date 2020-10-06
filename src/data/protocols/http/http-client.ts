export type HttpMethod = 'GET';

export type HttpRequest = {
  url: string;
  method: HttpMethod;
  params: string;
};

export enum HttpStatusCode {
  ok = 200,
}

export type HttpResponse<T = any> = {
  statusCode: HttpStatusCode;
  body?: T;
};

export interface HttpClient<T = any> {
  request: (data: HttpRequest) => Promise<HttpResponse<T>>;
}
