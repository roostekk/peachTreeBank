export class Transaction {
  amount: string;
  categoryCode: string;
  merchant: string;
  merchantLogo: string;
  transactionDate: number;
  transactionType: string;

  constructor(amount: string, merchant: string, merchantLogo?: string) {
    this.amount = amount;
    this.merchant = merchant;
    this.merchantLogo = merchantLogo || '';
    this.transactionType = 'Online Transfer';
    this.categoryCode = '#e25a2c';
    this.transactionDate = new Date().getTime();
  }
}
