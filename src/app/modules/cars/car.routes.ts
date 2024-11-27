import express from 'express';
import { CarControllers } from './car.controller';

const carRouter = express.Router();

carRouter.post('/cars', CarControllers.createCars);

export const CarRoutes = carRouter;
