import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { globaErrorHandler } from '../middleware/globalErrorHandler';
import globalRouter from './routes/globalRoutes';

const app: Application = express();
app.use(cors());

app.use(express.json());
app.use('/api/v1/', globalRouter);

//! Testing

// app.get('/un', async (req: Request, res: Response, next: NextFunction) => {
//   throw new Error('Testing Error Logger');
//   // next("Custom Err On Next Function")
// });

//** Error Handler  */
app.use(globaErrorHandler);

//** Global Error handler */
app.use((req: Request, res: Response) => {
  res.status(200).json({
    success: false,
    message: 'No API Found',
    errorMessage: [
      {
        path: ' ',
        message: 'Invalid API',
      },
    ],
  });
});

//** Log  Production Level */
// successLogger.info(app.get('env'))

export default app;
