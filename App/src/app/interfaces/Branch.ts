import {Company} from './Company';

export interface Branch {
  id: number;
  company: Company;
  name: string;
  status: boolean;
  hour_rate: number;
  km_rate: number;
  package_rate: number;
  fixed_hours: number;
  plus_km: number;
  type: number;
}