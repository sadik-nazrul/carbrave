import { Car } from './car.interface';
import { CarModel } from './car.model';

// Create Cars
const createCarIntoDB = async (car: Car) => {
  const result = await CarModel.create(car);
  return result;
};

// Get all Cars
const getCarsToDB = async () => {
  const result = await CarModel.find();
  return result;
};

// Get single car
const getSingleCarToDB = async (id: string) => {
  const result = await CarModel.findById(id);
  return result;
};

// Find single car and update the car
const updateCarInDb = async (id: string, data: Car) => {
  const result = await CarModel.findByIdAndUpdate(id, data, {
    new: true,
  });
  return result;
};

// Find Single car and delete the car
const deleteCarToDB = async (id: string) => {
  const result = await CarModel.findByIdAndDelete(id);
  return result;
};

export const CarServices = {
  createCarIntoDB,
  getCarsToDB,
  getSingleCarToDB,
  updateCarInDb,
  deleteCarToDB,
};
