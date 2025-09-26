import { Driver } from './Driver';
import { TollControlImage } from './TollControlImage';

export interface TollControl {
  id: number;
  date: string;
  station: string;
  total: number;
  driver: Driver;
  toll_control_images: TollControlImage[];
}
