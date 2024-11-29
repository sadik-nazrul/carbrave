import { CarModel } from '../cars/car.model';
import { Order } from './order.interface';
import { orderModel } from './order.model';

// Order creation
const createOrderIntoDB = async (order: Order) => {
  const car = await CarModel.findById(order.car);
  if (!car) {
    throw new Error('Car not Found');
  }
  if (car.quantity < order.quantity) {
    throw new Error('Insufficient Stock');
  }
  car.quantity -= order.quantity;
  if (car.quantity === 0) {
    car.inStock = false;
  }

  await car.save();
  const result = await orderModel.create(order);
  return result;
};

// Get Total revenue
const getTotalRevenueIntoDb = async () => {
  const result = await orderModel.aggregate([
    // Stage-1
    {
      $group: { _id: null, revenue: { $sum: '$totalPrice' } },
    },

    // Stage-2
    {
      $project: {
        _id: 0,
        totalRevenue: '$revenue',
      },
    },
  ]);
  return result;
};

export const orderService = {
  createOrderIntoDB,
  getTotalRevenueIntoDb,
};
