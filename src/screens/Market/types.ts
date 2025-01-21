export interface ICrypto {
  description: any;
  id: string;
  name: string;
  icon: string;
  amount: string;
  currency: string;
  change: string;
  lineChartData: number[];
  status: number; // 1 for positive, 0 for negative
  symbol: string;
  date: string;
  weight?: string;
  exchange?: string;
  financialRate?: string;
}
