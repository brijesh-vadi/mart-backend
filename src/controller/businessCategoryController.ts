import { Request, Response } from 'express';
import pool from '../db/postgres-pool.js';

export const getAllBusinessCategories = async (req: Request, res: Response) => {
  try {
    const response = await pool.query('SELECT * FROM business_categories');

    if (response.rows.length > 0) {
      res.status(200).json({
        status: 'success',
        message: 'Categories fetched successfully.',
        data: {
          businessCategories: response.rows,
        },
      });
      return;
    } else {
      res.status(404).json({
        status: 'fail',
        message: 'No categories found.Try adding some.',
      });
      return;
    }
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: 'Failed to load business categories.Please try again.',
    });
  }
};

export const createBusinessCategory = (req: Request, res: Response) => {
  res.status(404).json({
    status: 'fail',
    message: 'This route is not defined yet.',
  });
};
export const updateBusinessCategory = (req: Request, res: Response) => {
  res.status(404).json({
    status: 'fail',
    message: 'This route is not defined yet.',
  });
};
export const getBusinessCategoryById = (req: Request, res: Response) => {
  res.status(404).json({
    status: 'fail',
    message: 'This route is not defined yet.',
  });
};
export const deleteBusinessCategory = (req: Request, res: Response) => {
  res.status(404).json({
    status: 'fail',
    message: 'This route is not defined yet.',
  });
};
