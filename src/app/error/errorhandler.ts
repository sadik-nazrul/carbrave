/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response } from 'express';

// Centralized error handler function
export const handleError = (err: any, res: Response) => {
  // Handle Zod validation errors
  if (err.name === 'ZodError') {
    const errorMessage = err.errors.map((error: any) => ({
      field: error.path.join('.'),
      message: error.message,
      value: error.received,
    }));

    return res.status(400).json({
      message: 'Validation failed',
      status: false,
      error: {
        name: 'ValidationError',
        errors: errorMessage,
      },
    });
  }

  // Handle database-related errors
  if (err.name === 'DatabaseError') {
    return res.status(500).json({
      message: 'Something went wrong',
      status: false,
      error: {
        name: 'DatabaseError',
        message: 'Failed to insert car into DB',
        stack: err.stack || 'No stack trace available',
      },
    });
  }

  // Handle other errors (general catch-all)
  return res.status(500).json({
    message: 'Something went wrong',
    status: false,
    error: {
      name: err.name || 'UnknownError',
      message: err.message || 'An unknown error occurred',
      stack: err.stack || 'No stack trace available',
    },
  });
};
