import { ObjectId } from 'mongoose';

export type Order = {
  email: string;
  car: ObjectId;
  quantity: number;
  totalPrice: number;
};
