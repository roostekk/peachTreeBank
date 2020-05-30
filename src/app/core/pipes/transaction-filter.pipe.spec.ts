import { TransactionFilterPipe } from './transaction-filter.pipe';
import {Transactions} from '../constants/transactions';

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
    expect(pipe.transform(transactions, searchTerm, null, false))
      .toEqual(transactions.filter(el => el.merchant.toLowerCase().includes(searchTerm.toLowerCase())));
  });

  it('should return sorted transactions', () => {
    const searchTerm = '';
    let activeSort: 'transactionDate' | 'merchant' | 'amount' = 'transactionDate';

    function sort(mockTransactions, mockSearchTerm, mockActiveSort, isAsc) {
      return mockTransactions
        .filter(el => el.merchant.toLowerCase().includes(mockSearchTerm.toLowerCase()))
        .sort((a, b) => {
          switch (mockActiveSort) {
            case 'amount':
              return +a[mockActiveSort] > +b[mockActiveSort] ? (isAsc ? 1 : -1) : (isAsc ? -1 : 1);
            case 'merchant':
              return a[mockActiveSort].toLowerCase() > b[mockActiveSort].toLowerCase() ? (isAsc ? 1 : -1) : (isAsc ? -1 : 1);
            case 'transactionDate':
              return a[mockActiveSort] > b[mockActiveSort] ? (isAsc ? 1 : -1) : (isAsc ? -1 : 1);
          }
        });
    }
    expect(pipe.transform(transactions, searchTerm, activeSort, true)).toEqual(sort(transactions, searchTerm, activeSort, true));
    expect(pipe.transform(transactions, searchTerm, activeSort, false)).toEqual(sort(transactions, searchTerm, activeSort, false));

    activeSort = 'amount';
    expect(pipe.transform(transactions, searchTerm, activeSort, true)).toEqual(sort(transactions, searchTerm, activeSort, true));
    expect(pipe.transform(transactions, searchTerm, activeSort, false)).toEqual(sort(transactions, searchTerm, activeSort, false));

    activeSort = 'merchant';
    expect(pipe.transform(transactions, searchTerm, activeSort, true)).toEqual(sort(transactions, searchTerm, activeSort, true));
    expect(pipe.transform(transactions, searchTerm, activeSort, false)).toEqual(sort(transactions, searchTerm, activeSort, false));
  });
});
