import { NextFunction, Request, Response } from 'express'

export const globaErrorhandler = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // if (err instanceof Error) {
  //     res.status(400).json({ error: err })
  // } else {
  //     res.status(500).json({ error: 'Something Went Wrong ' })
  // }
  res.status(400).json({ err: err })
  next('sOMeThInG wEnT WrOnG')
}
