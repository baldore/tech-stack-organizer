import { Request, Response, NextFunction } from 'express'

function errorMiddleware (error: Error, _req: Request, res: Response, _next: NextFunction) {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode
  res.status(statusCode)
  res.send({
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? 'nope' : error.stack,
  })
}

export default errorMiddleware
