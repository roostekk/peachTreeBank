export class Filter {
  searchTerm: string
  activeSort: 'transactionDate' | 'merchant' | 'amount';
  sort: {[key: string]: {asc: boolean}};

  constructor() {
    this.searchTerm = '';
    this.activeSort = 'transactionDate';
    this.sort =  {
      transactionDate: {
        asc: false
      },
      merchant: {
        asc: false
      },
      amount: {
        asc: false
      }
    }
  }

}
