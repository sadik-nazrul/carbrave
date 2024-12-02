import { Request, Response } from 'express';
import carValidationSchema from './car.validation';
import { CarServices } from './car.service';
import { handleError } from '../../error/errorhandler';

// Create a Car
const createCars = async (req: Request, res: Response) => {
  try {
    //validate data using zod
    const validateCarData = carValidationSchema.parse(req.body);

    // call service func to send this data to save in DB
    const result = await CarServices.createCarIntoDB(validateCarData);
    res.status(200).json({
      message: 'Car created successfully',
      status: true,
      date: result,
    });
  } catch (err) {
    handleError(err, res);
  }
};

// Get all cars
const getCars = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    const result = await CarServices.getCarsToDB(searchTerm as string);
    if (result.length === 0) {
      res.status(200).json({
        message: 'Retriving call is successfull',
        status: true,
        data: `But no data have in the Database to show.`,
      });
    }
    res.status(200).json({
      message: 'Cars retrieved successfully',
      status: true,
      data: result,
    });
  } catch (err) {
    handleError(err, res);
  }
};

// Get Single Car
const getSingleCar = async (req: Request, res: Response) => {
  try {
    const carId = req.params.carId;
    const result = await CarServices.getSingleCarToDB(carId);
    if (result === null) {
      res.status(200).json({
        message: 'Retriving call is successfull',
        status: true,
        data: 'Something went wrong please check the ID or other things',
      });
    }
    res.status(200).json({
      message: 'Car retrieved successfully',
      status: true,
      data: result,
    });
  } catch (err) {
    handleError(err, res);
  }
};

// Find for updating a car
const updateCar = async (req: Request, res: Response) => {
  try {
    const carId = req.params.carId;
    const data = req.body;
    const result = await CarServices.updateCarInDb(carId, data);
    if (result === null) {
      res.status(200).json({
        message: 'Updating call is successfull',
        status: true,
        data: 'Something went wrong please check the ID or other things',
      });
    }
    res.status(200).json({
      message: 'Car updated successfully',
      status: true,
      data: result,
    });
  } catch (err) {
    handleError(err, res);
  }
};

// Find for deleting a car
const deleteCar = async (req: Request, res: Response) => {
  try {
    const carId = req.params.carId;
    const result = await CarServices.deleteCarToDB(carId);
    if (result === null) {
      res.status(200).json({
        message: 'Deleting call is successfull',
        status: true,
        data: 'Something went wrong please check the ID or other things',
      });
    }
    res.status(200).json({
      message: 'Car deleted successfully',
      status: true,
      data: {},
    });
  } catch (err) {
    handleError(err, res);
  }
};

export const CarControllers = {
  createCars,
  getCars,
  getSingleCar,
  updateCar,
  deleteCar,
};
