import { Request, Response, NextFunction } from 'express';

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction): void {
  console.error('Unhandled System Exception:', err.message);
  res.status(500).json({
    status: 'error',
    code: 'INTERNAL_TRANSACTION_FAULT',
    message: 'An error occurred processing the transaction.'
  });
}
