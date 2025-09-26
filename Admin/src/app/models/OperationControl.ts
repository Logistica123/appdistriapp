import { Driver } from './Driver';
import { OperationControlImage } from './OperationControlImage';
import { Action } from './Action';
import { Branch } from './Branch';
import { MaterialUbi } from './MaterialUbi';

export interface OperationControl {
  id: number;
  date: string;
  city: string;
  service: string;
  transportModel: string;
  transportMake: string;
  tonnage: number;
  hours: number;
  km: number;
  assigned: number;
  delivered: number;
  description: string;
  company: string;
  approved: number;
  driver: Driver;
  operation_control_images: OperationControlImage[];
  actions: Action[];
  branch: Branch;
  zone: string;
  material_ubi: MaterialUbi;
}
