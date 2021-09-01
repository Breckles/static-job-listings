import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AppliedFiltersComponent } from './applied-filters.component';

describe('AppliedFiltersComponent', () => {
  let component: AppliedFiltersComponent;
  let fixture: ComponentFixture<AppliedFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppliedFiltersComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliedFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onClearFiltersHandler should be called when the clear button is clicked.', () => {
    spyOn(component, 'onClearFiltersHandler');
    let clearBtn = fixture.debugElement.query(
      By.css('.clearButtonWrapper button')
    );
    clearBtn.triggerEventHandler('click', null);
    expect(component.onClearFiltersHandler).toHaveBeenCalled();
  });
});
