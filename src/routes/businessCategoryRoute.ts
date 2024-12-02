import express from 'express';
import {
  createBusinessCategory,
  deleteBusinessCategory,
  getAllBusinessCategories,
  getBusinessCategoryById,
  updateBusinessCategory,
} from '../controller/businessCategoryController.js';

const businessCategoryRoute = express.Router();

businessCategoryRoute.route('/').get(getAllBusinessCategories).post(createBusinessCategory);
businessCategoryRoute
  .route('/:categoryId')
  .get(getBusinessCategoryById)
  .patch(updateBusinessCategory)
  .delete(deleteBusinessCategory);

export default businessCategoryRoute;
