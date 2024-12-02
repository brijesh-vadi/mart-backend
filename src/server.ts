import dotenv from 'dotenv';
import { app } from './app.js';

dotenv.config({
  path: './.env',
});

const port = Number(process.env.PORT || '3000');

app.listen(port, '0.0.0.0', () => {
  console.log(`App running on http://0.0.0.0:${port}`);
});
