import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';

dotenv.config();

export const app = express();

if (process.env.MODE === 'DEVELOPMENT') {
  app.use(morgan('dev'));
}

app.use(express.json());
