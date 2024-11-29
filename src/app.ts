import express, { Request, Response } from 'express';
import cors from 'cors';
import { CarRoutes } from './app/modules/cars/car.routes';
import { orderRoutes } from './app/modules/orders/order.routes';
const app = express();

// Parser
app.use(express.json());
app.use(cors());

// Car Route
app.use('/api', CarRoutes);

// Order Route
app.use('/api', orderRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Tackle Any Road with CarBrave');
});

export default app;
