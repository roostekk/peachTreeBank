import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TransactionsListComponent} from './transactions-list.component';
import {TransactionFilterPipe} from "../../core/pipes/transaction-filter.pipe";
import {Filter} from "../../core/models/transaction-filter.model";

describe('TransactionsListComponent', () => {
  let component: TransactionsListComponent;
  let fixture: ComponentFixture<TransactionsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionsListComponent, TransactionFilterPipe]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should assign new filters', () => {
    const filters = new Filter();
    component.onFiltersChange(filters);
    expect(component.filters).toBe(filters);
  });
});
