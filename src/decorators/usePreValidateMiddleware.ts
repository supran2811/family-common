import { RequestHandler } from 'express';
import 'reflect-metadata';
import { MetadataKeys } from './constants';

export function usePreValidateMiddleware(middleware: RequestHandler) {
  return function (target: any, key: string) {
    const middlewares =
      Reflect.getMetadata(MetadataKeys.PREVALIDATE_MIDDLEWARE, target, key) ||
      [];

    Reflect.defineMetadata(
      MetadataKeys.PREVALIDATE_MIDDLEWARE,
      [...middlewares, middleware],
      target,
      key
    );
  };
}
