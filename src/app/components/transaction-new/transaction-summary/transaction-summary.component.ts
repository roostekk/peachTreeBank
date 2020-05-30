import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Transaction} from '../../../core/models/transaction.model';
import {TransactionService} from '../../../core/services/transaction.service';

@Component({
  selector: 'app-transaction-summary',
  templateUrl: './transaction-summary.component.html',
  styleUrls: ['./transaction-summary.component.scss']
})
export class TransactionSummaryComponent implements OnInit {

  @Input() transaction: Transaction;
  @Input() balance: number;
  @Output() transferMade: EventEmitter<string> = new EventEmitter<string>();
  @Output() transferCanceled: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private transactionService: TransactionService
  ) { }

  ngOnInit(): void {
  }

  makeTransfer(): void {
    this.transactionService.addTransaction(this.transaction);
    this.transferMade.emit(this.transaction.amount);
  }

  gobBack(): void {
    this.transferCanceled.emit();
  }
}
