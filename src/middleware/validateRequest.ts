/* eslint-disable no-console */

import { AnyZodObject } from 'zod';
import { NextFunction, Request, Response } from 'express';

export const validateRequest =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
        cookies: req.cookies,
      });
      return next();
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
