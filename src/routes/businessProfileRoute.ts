import express from 'express';
import {
  createBusinessProfile,
  deleteBusinessProfile,
  getAllBusinessProfiles,
  getBusinessProfileById,
  updateBusinessProfile,
} from '../controller/businessProfileController.js';

const businessProfileRoute = express.Router();

businessProfileRoute.route('/').get(getAllBusinessProfiles).post(createBusinessProfile);
businessProfileRoute
  .route('/:profileId')
  .get(getBusinessProfileById)
  .patch(updateBusinessProfile)
  .delete(deleteBusinessProfile);

export default businessProfileRoute;
