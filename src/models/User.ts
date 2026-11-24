export interface UserAccount {
  id: string;
  email: string;
  fullName: string;
  merchantTier: 'standard' | 'enterprise';
  balanceUsd: number;
  createdAt: Date;
}
