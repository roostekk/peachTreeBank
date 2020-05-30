import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {TransactionsFiltersComponent} from './transactions-filters.component';

describe('TransactionsFiltersComponent', () => {
  let component: TransactionsFiltersComponent;
  let fixture: ComponentFixture<TransactionsFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionsFiltersComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change activeSort property in Filter model', () => {
    const filters = component.filters;
    component.sort('merchant');
    expect(filters.activeSort).toEqual('merchant')
  });

  it('should toggle sort type property in Filter model if activeSort is the same', () => {
    component.filters.activeSort = 'merchant';
    component.filters.sort['merchant'].asc = false;
    component.sort('merchant');
    expect(component.filters.sort['merchant'].asc).toBe(true)
  });

  it('should change sort type to false if activeSort is different than before', () => {
    component.filters.activeSort = 'transactionDate';
    component.sort('merchant');
    expect(component.filters.sort['merchant'].asc).toBe(false)
  });

  it('should emit changed filters', () => {
    spyOn(component.filtersChange, 'emit');
    component.emitFilters();
    fixture.detectChanges();
    expect(component.filtersChange.emit).toHaveBeenCalled();
  });

  it('should reset search term', () => {
    component.searchReset();
    expect(component.filters.searchTerm).toEqual('');
  });
});
