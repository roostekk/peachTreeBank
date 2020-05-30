import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TransactionsListComponent } from './components/transactions-list/transactions-list.component';
import { TransactionFormComponent } from './components/transaction-new/transaction-form/transaction-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TransactionFilterPipe } from './core/pipes/transaction-filter.pipe';
import { TransactionNewComponent } from './components/transaction-new/transaction-new.component';
import { TransactionSummaryComponent } from './components/transaction-new/transaction-summary/transaction-summary.component';
import { TransactionsFiltersComponent } from './components/transactions-list/transactions-filters/transactions-filters.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionsListComponent,
    TransactionFormComponent,
    TransactionFilterPipe,
    TransactionNewComponent,
    TransactionSummaryComponent,
    TransactionsFiltersComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
