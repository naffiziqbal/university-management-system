import mongoose from 'mongoose';
import app from './app/app';
import config from './config';
import { errorLogger, infoLogger, successLogger } from './shared/logger';
// import ApiError from './erros/apiErrors'
import { Server } from 'http'; // Default Package of Node

//   Handle Uncaught Exeption
process.on('uncaughtException', error => {
  errorLogger.error(error.message);
  process.exit(1);
});

const port = config.port;
let server: Server;
// Database Connection Function
async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    successLogger.info('Database Connection Successfull');

    server = app.listen(port, () => {
      successLogger.info(`Application is Listening on Port ${port} `);
    });
    //eslint-disable-next-line
  } catch (error: any) {
    errorLogger.error('Failde To Connect Database', error);
  }

  //  To Handle abrupt Server Crash

  process.on('unhandledRejection', err => {
    if (server) {
      //eslint-disable-next-line
      console.log('Unhandle');
      server.close(() => {
        errorLogger.error(err);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}
main();

process.on('SIGTERM', () => {
  infoLogger.info('SIGTERM Recived');
  if (server) {
    server.close();
  }
});
