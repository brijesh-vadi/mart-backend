import { z } from 'zod';

export const BusinessProfileSchema = z.object({
  ownerName: z
    .string({
      required_error: 'Owner Name is required.',
    })
    .min(3, { message: 'Owner name should be at least 3 characters long.' })
    .max(20, { message: 'Owner name should not exceed 20 characters' }),

  businessName: z
    .string({
      required_error: 'Business name is required.',
    })
    .min(3, { message: 'Business name should be at least 3 characters long.' })
    .max(255, { message: 'Business name should not exceed 255 characters' }),

  mobileNumber: z
    .number({
      required_error: 'Mobile number is required.',
    })
    .min(10, { message: 'Mobile number must be exactly 10 digits' }),

  emailAddress: z
    .string({
      required_error: 'Email address is required.',
    })
    .email({ message: 'Please provide a valid email address' })
    .max(255, { message: 'Email address should not exceed 255 characters' }),

  businessAddress: z
    .string()
    .min(5, { message: 'Business address should be at least 5 characters long' })
    .max(500, { message: 'Business address should not exceed 500 characters' }),

  businessCategoryId: z.string().uuid({ message: 'Business category ID must be a valid UUID' }),

  businessTypeId: z.string().uuid({ message: 'Business type ID must be a valid UUID' }),

  isPaid: z.boolean({
    required_error: 'Please provide if user paid or not.',
  }),

  amountPaid: z.number({
    required_error: 'Enter paid amount.',
  }),
});
