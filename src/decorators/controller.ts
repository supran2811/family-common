import 'reflect-metadata';

import { MetadataKeys } from './constants';
export const controller = (routePath: string, router: any): Function => {
  return function (target: Function) {
    for (const key in target.prototype) {
      const method = Reflect.getMetadata(
        MetadataKeys.METHOD,
        target.prototype,
        key
      );
      const path = Reflect.getMetadata(
        MetadataKeys.PATH,
        target.prototype,
        key
      );

      const preValidatemiddlewares =
        Reflect.getMetadata(
          MetadataKeys.PREVALIDATE_MIDDLEWARE,
          target.prototype,
          key
        ) || [];

      const validators =
        Reflect.getMetadata(MetadataKeys.VALIDATORS, target.prototype, key) ||
        [];
      const middlewares =
        Reflect.getMetadata(MetadataKeys.MIDDLEWARE, target.prototype, key) ||
        [];

      router[method](
        ...preValidatemiddlewares,
        routePath + path,
        validators,
        ...middlewares,
        target.prototype[key]
      );
    }
  };
};
