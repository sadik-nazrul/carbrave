import { Request, Response } from 'express';
import carValidationSchema from './car.validation';
import { CarServices } from './car.services';

const createCars = async (req: Request, res: Response) => {
  try {
    //validate data using zod
    const validateCarData = carValidationSchema.parse(req.body);

    // call service func to send this data to save in DB
    const result = await CarServices.createCarIntoDB(validateCarData);
    res.status(200).json({
      message: 'Car created successfully',
      success: true,
      date: result,
    });
  } catch (err: any) {
    // Handle Zod validation errors
    if (err.name === 'ZodError') {
      const errorMessage = err.errors.map((error: any) => ({
        field: error.path.join('.'),
        message: error.message,
        value: error.received,
      }));

      return res.status(400).json({
        message: 'Validation failed',
        success: false,
        error: {
          name: 'ValidationError',
          errors: errorMessage,
        },
      });
    }

    // Handle Database error
    if (err.name === 'DatabaseError') {
      return res.status(500).json({
        message: 'Something went wrong',
        success: false,
        error: {
          name: 'DatabaseError',
          message: 'Failed to insert car into DB',
          stack: err.stack || 'No stack trace available',
        },
      });
    }

    // Another error
    res.status(500).json({
      message: 'Something went wrong',
      success: false,
      error: {
        name: err.name || 'UnknownError',
        message: err.message || 'An unknown error occurred',
        stack: err.stack || 'No stack trace available',
      },
    });
  }
};

export const CarControllers = {
  createCars,
};
