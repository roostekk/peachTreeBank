import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TransactionFormComponent} from './transaction-form.component';
import {Transaction} from '../../../core/models/transaction.model';
import {FormBuilder} from '@angular/forms';

describe('TransactionFormComponent', () => {
  let component: TransactionFormComponent;
  let fixture: ComponentFixture<TransactionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionFormComponent],
      providers: [FormBuilder]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fix the amount to 2 decimals', () => {
    const amount = 200;
    component.transferForm.get('amount').setValue(amount);
    component.convertToFixed();
    expect(component.transferForm.get('amount').value).toEqual(amount.toFixed(2));
  });

  it('should emit transaction', () => {
    const transaction = new Transaction('100', 'John Doe');
    spyOn(component.formSubmit, 'emit');
    component.submit();
    fixture.detectChanges();
    expect(component.formSubmit.emit).toHaveBeenCalled();
  });
});
