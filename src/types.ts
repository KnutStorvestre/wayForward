// types.ts
export interface Image {
  url: string;
  alt: string;
}

export interface ContactInfo {
  contactName: string;
  phoneNumber: string;
  email: string;
}

export interface Employee {
  image: Image;
  name: string;
  position: string;
}

export type EmployeeArray = Employee[];

export interface RentalCardData {
  activityTitle: string;
  image: Image;
  googleMapsLink: string;
  street: string;
  zipCode: string;
  description: string;
  linkBuilding: string;
}

export type RentalCardDataArray = RentalCardData[];

export interface RentalPremiseData {
  rentalPremiseName: string;
  images: Image[];
  mapLink: string;
  address: string;
  zipCode: string;
  apartmentDescription: string;
  keyInfo: string[][];
  facilities: string[][];
  calendarLink: string;
  contactInfo: ContactInfo;
  priceDescription: string;
}

export interface Activity {
  activityTitle: string;
  googleMapsLink: string;
  street: string;
  zipCode: string;
  time: string;
  ageGroup: string;
  description: string;
}

export interface ActivitiesPageData {
  title: string;
  topText: string;
  facebookLink: string;
  instagramLink: string;
  activities: Activity[];
}