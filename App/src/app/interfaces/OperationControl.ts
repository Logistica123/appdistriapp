import {Branch} from './Branch';
import {MaterialUbi} from './MaterialUbi';

export interface OperationControl {
  id: number;
  date: string;
  city: string;
  service: string;
  transport_model: string;
  transport_make: string;
  tonnage: number;
  hours: number;
  km: number;
  assigned: number;
  delivered: number;
  description: string;
  company: string;
  approved: number;
  per: number;
  branch: Branch;
  zone: string;
  material_ubi: MaterialUbi;
}
