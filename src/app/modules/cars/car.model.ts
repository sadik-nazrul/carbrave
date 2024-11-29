import { Schema, model } from 'mongoose';
import { Car } from './car.interface';

const carSchema = new Schema<Car>(
  {
    brand: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    price: { type: Number, required: true },
    category: {
      type: String,
      required: true,
      enum: { values: ['Sedan', 'SUV', 'Truck', 'Coupe', 'Convertible'] },
    },
    description: { type: String, required: true },
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true, default: true },
  },
  { timestamps: true },
);

// // pre hook
// carSchema.pre('find', function (this, next) {
//   this.find({ inStock: { $ne: false } });
//   next();
// });
export const CarModel = model<Car>('Car', carSchema);
