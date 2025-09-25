import { Driver } from './Driver';
import { FuelControlImage } from './FuelControlImage';

export interface FuelControl {
  id: number;
  date: string;
  station: string;
  fuel_type: string;
  liters: number;
  price: number;
  total: number;
  driver: Driver;
  fuel_control_images: FuelControlImage[];
}
