import dotenv from 'dotenv';
import pg from 'pg';

dotenv.config();

pg.types.setTypeParser(1700, (value) => parseFloat(value));

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const connectToDB = async () => {
  try {
    const client = await pool.connect();
    console.log('Connected to PostgreSQL');
    client.release();
  } catch (err) {
    console.error('Failed to connect to PostgreSQL:', err);
  }
};

connectToDB();

export default pool;
