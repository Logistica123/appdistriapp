export interface BenefitMeta {
  backgroundColor?: string;
  accentColor?: string;
  badge?: string;
  animation?: string;
  icon?: string;
  [key: string]: any;
}

export interface Benefit {
  id?: number;
  title: string;
  subtitle?: string;
  short_description?: string;
  description?: string;
  type: 'hero' | 'highlight' | 'feature' | 'card';
  position?: number;
  is_active?: boolean;
  image_url?: string | null;
  cta_label?: string;
  cta_url?: string;
  meta?: BenefitMeta | null;
  external_image_url?: string | null;
  created_at?: string;
  updated_at?: string;
}
