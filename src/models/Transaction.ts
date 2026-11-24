export interface FinancialTransaction {
  transactionId: string;
  sourceAccountId: string;
  destinationAccountId: string;
  amountCents: number;
  currency: string;
  status: 'pending' | 'settled' | 'declined';
  initiatedAt: Date;
}
