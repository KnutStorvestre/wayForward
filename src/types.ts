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

export interface RentalCardData {
  activityTitle: string;
  image: string;
  googleMapsLink: string;
  street: string;
  zipCode: string;
  description: string;
  contactInfo: ContactInfo;
  linkBuilding: string;
}

export type RentalCardsData = RentalCardData[];

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