import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import Filter from 'src/app/models/filter.model';
import { FilterTabletComponent } from './filter-tablet.component';

const filter: Filter = { category: 'role', value: 'Frontend' };

@Component({
  template: `<app-filter-tablet [filter]="filter"
    >Test Successful</app-filter-tablet
  >`,
})
class WrapperComponentAdd {}
@Component({
  template: `<app-filter-tablet [filter]="filter" [mode]="'remove'"
    >Test Successful</app-filter-tablet
  >`,
})
class WrapperComponentRemove {}

describe('FilterTabletComponent', () => {
  let component: FilterTabletComponent;
  let fixture: ComponentFixture<FilterTabletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WrapperComponentAdd, FilterTabletComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterTabletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should display projected content in add mode.', () => {
    const fixture = TestBed.createComponent(WrapperComponentAdd);
    const wrapperComponent = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
    expect(wrapperComponent.querySelector('.addBtn')?.innerHTML).toContain(
      'Test Successful'
    );
  });

  it('should display projected content in remove mode.', () => {
    const fixture = TestBed.createComponent(WrapperComponentRemove);
    const wrapperComponent = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();

    expect(
      wrapperComponent.querySelector('app-filter-tablet')?.innerHTML
    ).toContain('Test Successful');
  });

  it('onAddFilterHandler should be called when addBtn button is clicked.', () => {
    spyOn(component, 'onAddFilterHandler');
    let addBtn = fixture.debugElement.query(By.css('.addBtn'));
    addBtn.triggerEventHandler('click', null);
    expect(component.onAddFilterHandler).toHaveBeenCalled();
  });

  it('onRemoveFilterHandler should be called when removeBtn is clicked.', () => {
    spyOn(component, 'onRemoveFilterHandler');

    component.mode = 'remove';
    fixture.detectChanges();

    const removeBtn = fixture.debugElement.query(By.css('.removeBtn'));

    removeBtn.triggerEventHandler('click', null);
    expect(component.onRemoveFilterHandler).toHaveBeenCalled();
  });
});
