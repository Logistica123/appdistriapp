import { Driver } from './Driver';

export interface Notification {
  id: number;
  text: string;
  created_at: string;
  drivers: Driver[];
}
