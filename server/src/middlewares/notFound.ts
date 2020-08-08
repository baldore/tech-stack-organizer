import { Request, Response, NextFunction } from 'express'

function notFoundMiddleware (_req: Request, res: Response, next: NextFunction) {
  const error = new Error()
  res.status(404)
  next(error)
}

export default notFoundMiddleware
