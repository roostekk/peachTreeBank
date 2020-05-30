import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Filter} from '../../../core/models/transaction-filter.model';

@Component({
  selector: 'app-transactions-filters',
  templateUrl: './transactions-filters.component.html',
  styleUrls: ['./transactions-filters.component.scss']
})
export class TransactionsFiltersComponent implements OnInit {

  filters: Filter;
  @Output() filtersChange: EventEmitter<Filter> = new EventEmitter<Filter>();

  constructor() { }

  ngOnInit(): void {
    this.filters = new Filter();
  }

  sort(property: 'transactionDate' | 'merchant' | 'amount'): void {
    this.filters.sort[property].asc = this.filters.activeSort === property ? !this.filters.sort[property].asc : false;
    this.filters.activeSort = property;
    this.emitFilters();
  }

  searchReset(): void {
    this.filters.searchTerm = '';
  }

  emitFilters(): void {
    this.filtersChange.emit(this.filters);
  }
}
