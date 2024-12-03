import express from 'express';
import {
  createBusinessType,
  deleteBusinessType,
  getAllBusinessTypes,
  getBusinessTypeById,
  updateBusinessType,
} from '../controller/businessTypeController.js';

const businessTypeRoute = express.Router();

businessTypeRoute.route('/').get(getAllBusinessTypes).post(createBusinessType);
businessTypeRoute.route('/:typeId').get(getBusinessTypeById).patch(updateBusinessType).delete(deleteBusinessType);

export default businessTypeRoute;
