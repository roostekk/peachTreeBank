import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Transaction} from '../models/transaction.model';
import {Transactions} from '../constants/transactions';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  transactions = Transactions;
  transaction$: BehaviorSubject<Transaction[]> = new BehaviorSubject<Transaction[]>(this.transactions.data);

  constructor() {
  }

  addTransaction(transaction: Transaction): any {
    this.transaction$.next([transaction, ...this.transaction$.getValue()]);
  }
}
