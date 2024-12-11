import { Request, Response } from 'express';
import { orderService } from './order.service';
import { handleError } from '../../error/errorhandler';

const createOrder = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const result = await orderService.createOrderIntoDB(body);
    res.status(200).json({
      message: 'Order created successfully',
      status: true,
      data: result,
    });
  } catch (err) {
    handleError(err, res);
  }
};

// Get total revenue
const getTotalRevenue = async (req: Request, res: Response) => {
  try {
    const [totalRevenue] = await orderService.getTotalRevenueIntoDb();
    if (totalRevenue === undefined) {
      res.status(200).json({
        message: 'Revenue calculation call is successfull',
        status: true,
        data: 'Do not have revenue Data',
      });
    }
    res.status(200).json({
      message: 'Revenue calculated successfully',
      status: true,
      data: totalRevenue,
    });
  } catch (err) {
    handleError(err, res);
  }
};

export const orderController = {
  createOrder,
  getTotalRevenue,
};
