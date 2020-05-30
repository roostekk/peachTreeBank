import { TransactionFilterPipe } from './transaction-filter.pipe';
import {Transactions} from "../constants/transactions";

describe('TransactionFilterPipe', () => {
  const pipe = new TransactionFilterPipe();
  const transactions = Transactions.data;

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return null if no transaction', () => {
    expect(pipe.transform(null, '', null, false)).toBeFalsy();
  });

  it('should return initial transactions if no searchTerm and sorting options provided', () => {
    expect(pipe.transform(transactions, '', null, false)).toEqual(transactions);
  });

  it('should return transaction filtered by search term', () => {
    const searchTerm = 'custom';
    expect(pipe.transform(transactions, searchTerm, null, false)).toEqual(transactions.filter(el => el.merchant.toLowerCase().includes(searchTerm.toLowerCase())));
  });

  it('should return sorted transactions', () => {
    const searchTerm = '';
    let activeSort: 'transactionDate' | 'merchant' | 'amount' = 'transactionDate';

    function sort(transactions, searchTerm, activeSort, isAsc) {
      return transactions
        .filter(el => el.merchant.toLowerCase().includes(searchTerm.toLowerCase()))
        .sort((a, b) => {
          if (activeSort === 'amount' ? +a[activeSort] > +b[activeSort] : a[activeSort] > b[activeSort]) {
            return isAsc ? 1 : -1
          } else {
            return isAsc ? -1 : 1
          }
        });
    }
    expect(pipe.transform(transactions, searchTerm, activeSort, true)).toEqual(sort(transactions, searchTerm, activeSort, true));
    expect(pipe.transform(transactions, searchTerm, activeSort, false)).toEqual(sort(transactions, searchTerm, activeSort, false));

    activeSort = 'amount';
    expect(pipe.transform(transactions, searchTerm, activeSort, true)).toEqual(sort(transactions, searchTerm, activeSort, true));
    expect(pipe.transform(transactions, searchTerm, activeSort, false)).toEqual(sort(transactions, searchTerm, activeSort, false));
  });
});
