import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import businessProfileRoute from './routes/businessProfileRoute.js';
import businessCategoryRoute from './routes/businessCategoryRoute.js';
import cors from 'cors';

dotenv.config();

export const app = express();

if (process.env.MODE === 'DEVELOPMENT') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, Railway is working!');
});

app.use('/api/v1/businessProfile', businessProfileRoute);
app.use('/api/v1/businessCategory', businessCategoryRoute);
