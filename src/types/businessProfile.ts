export interface IBusinessProfile {
  id: string;
  ownerName: string;
  businessName: string;
  mobileNumber: number;
  emailAddress: string;
  businessAddress: string;
  businessCategoryId: string;
  businessCategory: string;
  isPaid: boolean;
  amountPaid?: number;
}

export interface IBusinessCategory {
  id: string;
  categoryName: string;
}
