export const COMPLAINT_TYPE_LABELS = {
  payment: 'Reclamo de pagos',
  fuel_increase: 'Aumento de combustible',
  tax_recognition: 'Reconocimiento de IVA',
  liquidation: 'Reclamo de liquidación',
  other: 'Otros motivos'
} as const;

export type ComplaintTypeValue = keyof typeof COMPLAINT_TYPE_LABELS;

export interface ComplaintTypeOption {
  value: ComplaintTypeValue;
  label: string;
}

export const COMPLAINT_TYPE_OPTIONS: ComplaintTypeOption[] = Object.entries(COMPLAINT_TYPE_LABELS)
  .map(([value, label]) => ({
    value: value as ComplaintTypeValue,
    label
  }));
