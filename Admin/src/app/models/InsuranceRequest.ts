export interface InsuranceRequest {
  id: number;
  driver_id: number;
  insurance_type: string;
  notes?: string;
  status: 'pending' | 'in_progress' | 'approved' | 'rejected';
  created_at: string;
  updated_at: string;
  driver?: {
    id: number;
    name: string;
    last_name: string;
    email: string;
    phone_number?: string;
    driver_company?: {
      id: number;
      name: string;
    };
  };
}
