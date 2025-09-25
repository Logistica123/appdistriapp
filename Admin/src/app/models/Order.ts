import { Driver } from './Driver';
import { Location } from './Location';
import { DeliveryImage } from './DeliveryImage';

export interface Order {
  id: number;
  receiver: string;
  description: string;
  delivered_at: string;
  skipped_at: string;
  canceled_at: string;
  created_at: string;
  status_es: string;
  driver: Driver;
  location: Location;
  delivery_images: DeliveryImage[];
}
