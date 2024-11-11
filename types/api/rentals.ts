export interface RentalResponse {
  id: string;
  type: string;
  attributes: RentalAttributes;
}

export interface RentalAttributes {
  title: string;
  description: string;
  owner: string;
  city: string;
  category: string;
  bedrooms: number;
  image: string;
  location: RentalLocation;
}

export interface RentalLocation {
  lat: number;
  lng: number;
}

export type RentalModel = Omit<RentalResponse, 'attributes'> & RentalAttributes;
