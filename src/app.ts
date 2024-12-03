import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
import businessProfileRoute from './routes/businessProfileRoute.js';
import businessCategoryRoute from './routes/businessCategoryRoute.js';
import businessTypeRoute from './routes/businessTypeRoute.js';

dotenv.config();

const app = express();

if (process.env.MODE === 'DEVELOPMENT') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send(`<h1>Hello from server.</h1>`);
});

app.use('/api/v1/businessProfile', businessProfileRoute);
app.use('/api/v1/businessCategory', businessCategoryRoute);
app.use('/api/v1/businessType', businessTypeRoute);

export default app;
