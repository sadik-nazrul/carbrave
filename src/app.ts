import express, { Request, Response } from 'express';
const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Tackle Any Road with CarBrave');
});

export default app;
