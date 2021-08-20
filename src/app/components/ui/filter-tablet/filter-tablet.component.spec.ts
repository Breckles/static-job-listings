import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterTabletComponent } from './filter-tablet.component';

@Component({
  template: `<app-filter-tablet>Test Successful</app-filter-tablet>`,
})
class ContentProjectionTestComponent {}

describe('FilterTabletComponent', () => {
  let component: FilterTabletComponent;
  let fixture: ComponentFixture<FilterTabletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContentProjectionTestComponent, FilterTabletComponent],
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

  it('Should display projected content in a button element', () => {
    const fixture = TestBed.createComponent(ContentProjectionTestComponent);
    const componentEl = fixture.nativeElement as HTMLElement;
    const buttonEl = componentEl.querySelector('button') as HTMLButtonElement;
    expect(buttonEl.innerHTML).toBe('Test Successful');
  });

  it('category property should be set', () => {
    const fixture = TestBed.createComponent(FilterTabletComponent);
    const component = fixture.componentInstance;

    expect(component.category).toBeNull();
    expect(component.value).toBeNull();

    const category = 'testCategory';
    const value = 'testValue';

    component.category = category;
    component.value = value;

    fixture.detectChanges();

    expect(component.category).toEqual(category);
    expect(component.value).toEqual(value);
  });
});
