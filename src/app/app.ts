import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import router from './modules/user/user.router';
import { successLogger } from '../share/logger';
import ApiError from '../erros/apiErrors';
import { globaErrorHandler } from '../middleware/globalErrorHandler';

const app: Application = express();
app.use(cors());
app.use(express.json());
app.use('/api/v1/', router);

//! Testing

app.get('/un', async (req: Request, res: Response, next: NextFunction) => {
  throw new Error('Testing Error Logger');
  // next("Custom Err On Next Function")
});

//** Error Handler  */
app.use(globaErrorHandler);

//** Log  Production Level */
// successLogger.info(app.get('env'))

export default app;
