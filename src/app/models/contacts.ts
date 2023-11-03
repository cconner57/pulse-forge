export interface Contact {
  userId: number;
  firstName: string;
  lastName: string;
  jobTitle: string;
  email: string;
  phone: string;
  avatar: string;
  birthday: {
    month: string;
    day: number;
    year: number;
  };
  address: {
    street1: string;
    street2: string;
    city: string;
    state: string;
    zipCode: number;
  };
}
