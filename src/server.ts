import express, { type Application } from 'express';
import { envConstants, ErrorTypeEnum } from '@/constants';
import helmet from 'helmet';
import cors from 'cors';
import { errorHandler } from './middleware/errorHandler';

export const app: Application = express();

const { APP_PORT } = envConstants;

if (envConstants.NODE_ENV !== 'test') {
  // Apply Helmet middleware with default options
  app.use(helmet());

  // Apply CORS middleware with a whitelist (adjust origins as needed)
  const allowedOrigins = ['http://localhost:3000'];

  const corsOptions = {
    origin: function (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) {
      if (origin === undefined) {
        callback(new Error(ErrorTypeEnum.enum.ORIGIN_IS_UNDEFINED));
      } else if (allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error(ErrorTypeEnum.enum.NOT_ALLOWED));
      }
    },
    credentials: true,
  };

  app.use(cors(corsOptions));
}

app.use(express.json());

app.use('/api/v1', () => {});

// Handling non matching request from the client
app.use('*', () => {
  throw new Error(ErrorTypeEnum.enum.RESOURCE_NOT_FOUND);
});

app.use(errorHandler);

export const server = () => {
  app.listen(APP_PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server is listening on port ${APP_PORT}!`);
  });
};
