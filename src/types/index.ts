export interface Vault {
  id: string;
  name: string;
  assets: Asset[];
  beneficiaries: Beneficiary[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Asset {
  id: string;
  name: string;
  symbol: string;
  chain: string;
  amount: number;
  valueUSD: number;
}

export interface Beneficiary {
  id: string;
  name: string;
  email: string;
  walletAddress: string;
  sharePercentage: number;
  isVerified: boolean;
}

export interface Will {
  id: string;
  vaultId: string;
  content: string;
  isEncrypted: boolean;
  createdAt: Date;
  updatedAt: Date;
}