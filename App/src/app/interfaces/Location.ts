import {Order} from './Order';

export interface Location {
  uid: string;
  id?: number;
  name: string;
  b: string;
  v: string;
  s: string;
  m: string;
  c: string;
  address: string;
  neighborhood?: string;
  block?: string;
  city: string;
  notes?: string;
  opening_hours?: string;
  phones?: string;
  lat: number;
  lng: number;
  status?: string;
  order?: Order;
  orders?: Order[];
  full_address: string;
  api_geocoded?: boolean;
  saved_client: boolean;
}
