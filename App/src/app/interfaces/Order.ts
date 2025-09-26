import {Location} from './Location';

export interface Order {
  uid: string;
  id?: number;
  status: string;
  status_es: string;
  // delivery_order: number;
  receiver: string;
  description: string;
  phone: string;
  type: string;
  location_id: number;
  not_delivered_motive: string;
  not_delivered_description: string;
  flag_color: string;
  date: string;
  location: Location;
  saved_client?: boolean;
}
