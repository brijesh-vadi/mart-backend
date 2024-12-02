import dotenv from 'dotenv';
import { app } from './app';

dotenv.config({
  path: './.env',
});

const port = parseInt(process.env.PORT || '8080', 10);

app.listen(port, '0.0.0.0', () => {
  console.log(`App running on http://0.0.0.0:${port}`);
});
