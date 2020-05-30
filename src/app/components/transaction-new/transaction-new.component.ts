import { Component, OnInit } from '@angular/core';
import {Transaction} from '../../core/models/transaction.model';

@Component({
  selector: 'app-transaction-new',
  templateUrl: './transaction-new.component.html',
  styleUrls: ['./transaction-new.component.scss']
})
export class TransactionNewComponent implements OnInit {

  showSummary: boolean;
  transaction: Transaction;
  balance = 5824.75;

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmitting(e): void {
    this.showSummary = true;
    this.transaction = e;
  }

  onTransferIsMade(e): void {
    this.showSummary = false;
    this.balance -= e;
  }

}
