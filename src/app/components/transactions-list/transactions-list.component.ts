import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Transaction} from "../../core/models/transaction.model";
import {TransactionService} from "../../core/services/transaction.service";
import {Filter} from "../../core/models/transaction-filter.model";

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.scss']
})
export class TransactionsListComponent implements OnInit {

  transactions$: Observable<Transaction[]>;
  filters: Filter;

  constructor(
    private _transactionService: TransactionService
  ) { }

  ngOnInit(): void {
    this.filters = new Filter();
    this.transactions$ = this._transactionService.transaction$;
  }

  onFiltersChange(e): void {
    this.filters = e;
    console.log(this.filters)
  }
}
