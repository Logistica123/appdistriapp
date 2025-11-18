export interface BenefitMeta {
  backgroundColor?: string;
  accentColor?: string;
  badge?: string;
  animation?: 'slide-in' | 'fade' | 'pulse' | 'float' | string;
  icon?: string;
  [key: string]: any;
}

export interface Benefit {
  id: number;
  title: string;
  subtitle?: string;
  short_description?: string;
  description?: string;
  type: 'hero' | 'highlight' | 'feature' | 'card';
  position?: number;
  is_active?: boolean;
  image_url?: string;
  cta_label?: string;
  cta_url?: string;
  meta?: BenefitMeta;
  external_image_url?: string;
}

export interface BenefitResponse {
  benefits: Benefit[];
  grouped: Record<string, Benefit[]>;
}
