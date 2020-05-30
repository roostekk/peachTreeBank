import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import {TransactionSummaryComponent} from './transaction-summary.component';
import {Transaction} from '../../../core/models/transaction.model';
import {TransactionService} from '../../../core/services/transaction.service';

describe('TransactionSummaryComponent', () => {
  let component: TransactionSummaryComponent;
  let fixture: ComponentFixture<TransactionSummaryComponent>;
  const transaction = new Transaction('100', 'John Doe');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionSummaryComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionSummaryComponent);
    component = fixture.componentInstance;
    component.balance = 100;
    component.transaction = new Transaction('100', 'John Doe');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add new transaction and emit transaction amount', inject([TransactionService], (service: TransactionService) => {
    spyOn(component.transferMade, 'emit');
    spyOn(service, 'addTransaction');
    component.makeTransfer();
    fixture.detectChanges();
    expect(service.addTransaction).toHaveBeenCalled();
    expect(component.transferMade.emit).toHaveBeenCalled();
  }));
});
