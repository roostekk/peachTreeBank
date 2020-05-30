import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Transaction} from "../../../core/models/transaction.model";

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.scss']
})
export class TransactionFormComponent implements OnInit {

  @Input() balance: number;
  @Output() formSubmit: EventEmitter<Transaction> = new EventEmitter<Transaction>();

  transferForm: FormGroup;
  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.transferForm = this._formBuilder.group({
      to: ['', Validators.required],
      amount: ['', [Validators.required, Validators.pattern('^(?=.*[0-9])[-0-9]+$'), Validators.max(this.balance + 500)]]
    })
  }

  submit(): void {
    this.formSubmit.emit(new Transaction(this.transferForm.value.amount, this.transferForm.value.to))
  }
}