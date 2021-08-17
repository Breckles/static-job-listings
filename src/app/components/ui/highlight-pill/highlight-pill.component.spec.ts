import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightPillComponent } from './highlight-pill.component';

@Component({
  template: '<app-highlight-pill>Test Successful</app-highlight-pill>',
})
class ContentProjectionTestingComponent {}

describe('HighlightPillComponent', () => {
  let component: ContentProjectionTestingComponent;
  let fixture: ComponentFixture<ContentProjectionTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContentProjectionTestingComponent, HighlightPillComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentProjectionTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should display the projected content within a span element.', () => {
    const componentEl = fixture.nativeElement as HTMLElement;
    const spanEl = componentEl.querySelector('span') as HTMLSpanElement;
    expect(spanEl.innerHTML).toBe('Test Successful');
  });
});
