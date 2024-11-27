import express, { Request, Response } from 'express';
import cors from 'cors';
import { CarRoutes } from './app/modules/cars/car.routes';
const app = express();

// Parser
app.use(express.json());
app.use(cors());

// Application routes
app.use('/api', CarRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Tackle Any Road with CarBrave');
});

export default app;
