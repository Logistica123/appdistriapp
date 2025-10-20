import { ComplaintTypeValue } from '../constants/complaint-types';

export interface Complaint {
  id: number;
  type?: ComplaintTypeValue;
  subject?: string;
  message: string;
  status: 'open' | 'in_progress' | 'resolved';
  resolved_at?: string;
  admin_notes?: string;
  created_at: string;
  updated_at: string;
}
