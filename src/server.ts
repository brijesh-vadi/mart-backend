import dotenv from 'dotenv';
import { app } from './app';

dotenv.config({
  path: './.env',
});

// const PORT = process.env.PORT || 8080;

app.listen(process.env.PORT || 8080, () => {
  console.log(`App running on port ${process.env.PORT}`);
});
