import {Pipe, PipeTransform} from '@angular/core';
import {Transaction} from '../models/transaction.model';

@Pipe({
  name: 'transactionFilter'
})
export class TransactionFilterPipe implements PipeTransform {

  transform(
    transactions: Transaction[], searchTerm: string, activeSort: 'transactionDate' | 'merchant' | 'amount', isSortTypeAsc: boolean
  ): Transaction[] {
    if (!transactions) {
      return null;
    }

    if (!searchTerm && !activeSort) {
      return transactions;
    }

    return transactions
      .filter(el => el.merchant.toLowerCase().includes(searchTerm.toLowerCase()))
      .sort((a, b) => {
        switch (activeSort) {
          case 'amount':
            return +a[activeSort] > +b[activeSort] ? (isSortTypeAsc ? 1 : -1) : (isSortTypeAsc ? -1 : 1);
          case 'merchant':
            return a[activeSort].toLowerCase() > b[activeSort].toLowerCase() ? (isSortTypeAsc ? 1 : -1) : (isSortTypeAsc ? -1 : 1);
          case 'transactionDate':
            return a[activeSort] > b[activeSort] ? (isSortTypeAsc ? 1 : -1) : (isSortTypeAsc ? -1 : 1);
        }
      });
  }

}
