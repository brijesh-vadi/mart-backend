import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import businessProfileRoute from './routes/businessProfileRoute';
import businessCategoryRoute from './routes/businessCategoryRoute';

dotenv.config();

export const app = express();

if (process.env.MODE === 'DEVELOPMENT') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use('/api/v1/businessProfile', businessProfileRoute);
app.use('/api/v1/businessCategory', businessCategoryRoute);
