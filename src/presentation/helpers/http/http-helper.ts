import { ServerError } from '@/presentation/errors';
import { HttpResponse } from '@/data/protocols';

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data,
});

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(error.stack),
});
