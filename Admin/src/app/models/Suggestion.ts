import { Driver } from './Driver';

export interface Suggestion {
  id: number;
  suggestion: string;
  created_at: string;
  driver: Driver;
}
