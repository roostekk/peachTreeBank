import { Pipe, PipeTransform } from '@angular/core';
import {Transaction} from "../models/transaction.model";

@Pipe({
  name: 'transactionFilter'
})
export class TransactionFilterPipe implements PipeTransform {

  transform(transactions: Transaction[], searchTerm: string, activeSort: 'transactionDate' | 'merchant' | 'amount', isSortTypeAsc: boolean): Transaction[] {
    if (!transactions) {
      return null
    }

    if(!searchTerm && !activeSort) {
      return transactions
    }

    return transactions
      .filter(el => el.merchant.toLowerCase().includes(searchTerm.toLowerCase()))
      .sort((a, b) => {
        if (activeSort === 'amount' ? +a[activeSort] > +b[activeSort] : a[activeSort] > b[activeSort]) {
          return isSortTypeAsc ? 1 : -1
        } else {
          return isSortTypeAsc ? -1 : 1
        }
      });
  }

}
