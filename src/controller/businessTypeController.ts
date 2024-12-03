import { Request, Response } from 'express';
import pool from '../db/postgres-pool.js';

export const getAllBusinessTypes = async (req: Request, res: Response) => {
  try {
    const response = await pool.query('SELECT * FROM business_types');

    if (response.rows.length > 0) {
      res.status(200).json({
        status: 'success',
        message: 'Types fetched successfully.',
        data: {
          businessTypes: response.rows,
        },
      });
      return;
    } else {
      res.status(404).json({
        status: 'fail',
        message: 'No business types found.Try adding some.',
      });
      return;
    }
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: 'Failed to load business types.Please try again.',
    });
  }
};

export const createBusinessType = (req: Request, res: Response) => {
  res.status(404).json({
    status: 'fail',
    message: 'This route is not defined yet.',
  });
};
export const updateBusinessType = (req: Request, res: Response) => {
  res.status(404).json({
    status: 'fail',
    message: 'This route is not defined yet.',
  });
};
export const getBusinessTypeById = (req: Request, res: Response) => {
  res.status(404).json({
    status: 'fail',
    message: 'This route is not defined yet.',
  });
};
export const deleteBusinessType = (req: Request, res: Response) => {
  res.status(404).json({
    status: 'fail',
    message: 'This route is not defined yet.',
  });
};
