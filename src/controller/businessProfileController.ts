import { Request, Response } from 'express';
import { z } from 'zod';
import { BusinessProfileSchema } from '../models/businessProfileModel.js';
import { IBusinessProfile } from '../types/businessProfile';
import pool from '../db/postgres-pool.js';

export const getAllBusinessProfiles = (req: Request, res: Response) => {
  res.status(404).json({
    status: 'fail',
    message: 'This route is not defined yet.',
  });
};

export const createBusinessProfile = async (req: Request<{}, {}, IBusinessProfile>, res: Response) => {
  try {
    BusinessProfileSchema.parse(req.body);
  } catch (err) {
    if (err instanceof z.ZodError) {
      const formattedErrors = err.errors.map((error) => ({
        path: error.path.join('.'),
        message: error.message,
      }));
      res.status(400).json({
        status: 'fail',
        message: 'Validation failed',
        errors: formattedErrors,
      });
      return;
    }
  }

  try {
    const {
      ownerName,
      businessName,
      mobileNumber,
      emailAddress,
      businessAddress,
      businessCategoryId,
      isPaid,
      amountPaid,
    } = req.body;

    const existingProfileQuery = `
      SELECT 1 FROM business_profiles
      WHERE mobile_number = $1 OR email_address = $2 LIMIT 1
    `;
    const existingProfileResult = await pool.query(existingProfileQuery, [mobileNumber, emailAddress]);

    if (existingProfileResult.rows.length > 0) {
      res.status(400).json({
        status: 'fail',
        message: 'Mobile number or email address already exists.',
      });
      return;
    }

    const query = `INSERT INTO business_profiles
      (owner_name, business_name, mobile_number, email_address, business_address, business_category_id, is_paid, amount_paid)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8,) RETURNING *`;

    const values = [
      ownerName,
      businessName,
      mobileNumber,
      emailAddress,
      businessAddress,
      businessCategoryId,
      isPaid,
      amountPaid,
    ];
    const result = await pool.query(query, values);

    if (result.rows.length > 0) {
      const createdBusinessProfile = result.rows[0];

      const categoryResult = await pool.query('SELECT category_name FROM business_categories WHERE id = $1', [
        businessCategoryId,
      ]);

      const responseData = {
        ...createdBusinessProfile,
        businessCategoryName: categoryResult.rows[0]?.category_name,
      };

      res.status(201).json({
        status: 'success',
        message: 'Business Profile created successfully.',
        data: {
          businessProfile: responseData,
        },
      });
      return;
    } else {
      res.status(500).json({
        status: 'fail',
        message: 'Failed to create Business Profile.',
      });
      return;
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: 'fail',
      message: 'An error occurred while creating business profile. Please try again later.',
    });
  }
};

export const updateBusinessProfile = (req: Request, res: Response) => {
  res.status(404).json({
    status: 'fail',
    message: 'This route is not defined yet.',
  });
};
export const getBusinessProfileById = (req: Request, res: Response) => {
  res.status(404).json({
    status: 'fail',
    message: 'This route is not defined yet.',
  });
};
export const deleteBusinessProfile = (req: Request, res: Response) => {
  res.status(404).json({
    status: 'fail',
    message: 'This route is not defined yet.',
  });
};
