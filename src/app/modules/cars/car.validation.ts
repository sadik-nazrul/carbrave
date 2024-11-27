import { z } from 'zod';

const carValidationSchema = z.object({
  brand: z
    .string()
    .nonempty('Brand is required')
    .regex(/^[A-Za-z]+$/, 'Brand must be alphabetic and contain only letters')
    .transform((value) => value.charAt(0).toUpperCase() + value.slice(1)),

  model: z
    .string()
    .nonempty('Model is required')
    .regex(/^[A-Za-z]+$/, 'Model must be alphabetic and contain only letters'),

  year: z
    .number()
    .positive('Year must be positive number')
    .int('year must be integer number')
    .min(1886, 'Year must be greater than or equal to 1886 (first car).'),

  price: z
    .number()
    .positive('Price must be a positive number')
    .min(1, 'Price is required'),

  category: z
    .enum(['Sedan', 'SUV', 'Truck', 'Coupe', 'Convertible'])
    .refine(
      (value) =>
        ['Sedan', 'SUV', 'Truck', 'Coupe', 'Convertible'].includes(value),
      {
        message:
          'Category must be one of the following: Sedan, SUV, Truck, Coupe, Convertible.',
      },
    ),

  description: z.string().min(10, 'description is required'),
  quantity: z
    .number()
    .positive('Quantity must be a positive number')
    .min(1, 'Quantity is required'),
  inStock: z
    .boolean()
    .refine((value) => value !== undefined, 'isStoke is required'),
});
export default carValidationSchema;
