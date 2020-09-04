import { NextFunction, Request, Response } from 'express';
import { AuthenticationError } from '../errors';

export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.currentUser) {
    throw new AuthenticationError('User not authorised');
  }

  next();
};
