export interface Complaint {
  id: number;
  type?: string;
  subject?: string;
  message: string;
  status: 'open' | 'in_progress' | 'resolved';
  resolved_at?: string;
  admin_notes?: string;
  created_at: string;
  driver?: {
    id: number;
    name: string;
    last_name: string;
    email: string;
    phone_number: string;
  };
}
