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
  location: string;
  description: string;
  linkBuilding: string;
}

export type RentalCardDataArray = RentalCardData[];

export interface Activity {
  activityTitle: string;
  link: string;
  time: string;
  ageGroup: string;
  description: string;
  image: string;
}

export interface ActivitiesPageData {
  title: string;
  topText: string;
  facebookLink: string;
  instagramLink: string;
  activities: Activity[];
}