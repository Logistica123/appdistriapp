export interface Transaction {
  id: number;
  amount: number;
  type: 'deposit' | 'withdraw';
  date: string;
}
