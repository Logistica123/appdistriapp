import { Branch } from './Branch';

export interface Company {
  id: number;
  name: string;
  branches: Branch[];
}
