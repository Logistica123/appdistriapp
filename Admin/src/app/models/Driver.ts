import { DriverLocation } from './DriverLocation';
import { PaymentMethod } from './PaymentMethod';
import { Device } from './Device';
import { Company } from './Company';

export interface Driver {
  id: number;
  admin_firebase_uid: string;
  firebase_uid: string;
  name: string;
  last_name: string;
  full_name: string;
  email: string;
  city: string;
  phone_number: string;
  car: string;
  car_make: string;
  car_model: string;
  car_year: string;
  license_plate: string;
  status: string;
  pusher_chat_id: string;
  img_url: string;
  tonnage: string;
  has_profile_img: boolean;
  cost_per_km: number;
  cost_per_hour: number;
  contractor: 'logistic_company' | 'none';
  score: number;
  payment_methods: PaymentMethod[];
  fcm_token: string;
  last_driver_location: DriverLocation;
  last_driver_geoposition: DriverLocation;
  driver_locations: DriverLocation[];
  devices: Device[];
  last_device: Device;
  company: Company;
}
