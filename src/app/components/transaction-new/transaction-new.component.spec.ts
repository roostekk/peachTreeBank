import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TransactionNewComponent} from './transaction-new.component';
import {Transaction} from "../../core/models/transaction.model";

describe('TransactionNewComponent', () => {
  let component: TransactionNewComponent;
  let fixture: ComponentFixture<TransactionNewComponent>;
  const transaction = new Transaction('100', 'John Doe');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionNewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the transfer summary and create new transaction', () => {
    component.onFormSubmitting(transaction);
    expect(component.showSummary).toBe(true);
    expect(component.transaction).toEqual(transaction);
  });

  it('should hide the transfer summary and reduce the balance', () => {
    const balance = component.balance;
    component.onTransferIsMade(transaction.amount);
    expect(component.showSummary).toBe(false);
    expect(component.balance).toEqual(balance - Number(transaction.amount));
  });
});
