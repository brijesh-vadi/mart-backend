import dotenv from 'dotenv';
import { app } from './app';

dotenv.config({
  path: './.env',
});

// const PORT = process.env.PORT;
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`App running on port ${PORT}`);
});
