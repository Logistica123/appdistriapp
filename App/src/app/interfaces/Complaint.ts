import { ComplaintTypeValue } from '../constants/complaint-types';

export interface Complaint {
  id: number;
  type?: ComplaintTypeValue;
  subject?: string;
  message: string;
  status: 'open' | 'in_progress' | 'resolved';
  status_label?: string;
  original_status?: string | null;
  resolved_at?: string;
  admin_notes?: string;
  created_at: string;
  updated_at: string;
  source?: 'distriapp' | 'personal';
  codigo?: string | null;
  meta?: Record<string, unknown>;
  external_id?: number | null;
}
