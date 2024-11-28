import express from 'express';
import { CarControllers } from './car.controller';

const carRouter = express.Router();

carRouter.post('/cars', CarControllers.createCars);
carRouter.get('/cars', CarControllers.getCars);
carRouter.get('/cars/:carId', CarControllers.getSingleCar);
carRouter.put('/cars/:carId', CarControllers.updateCar);
carRouter.delete('/cars/:carId', CarControllers.deleteCar);

export const CarRoutes = carRouter;
