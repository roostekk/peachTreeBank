import { TestBed, inject } from '@angular/core/testing';

import { TransactionService } from './transaction.service';
import {Transaction} from "../models/transaction.model";

describe('TransactionService', () => {
  const transactions = [new Transaction('100', 'John Doe')];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransactionService]
    });
  });

  it('should be created', inject([TransactionService], (service: TransactionService) => {
    expect(service).toBeTruthy();
  }));

  it('should be emit new transactions stream', inject([TransactionService], (service: TransactionService) => {
   const newTransaction = new Transaction('200', 'John Doe');
   service.transaction$.next(transactions);
   service.addTransaction(newTransaction);

   service.transaction$.subscribe(res => {
     expect(res).toEqual([newTransaction, ...transactions])
   })
  }));
});
