import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightPillComponent } from './highlight-pill.component';

describe('HighlightPillComponent', () => {
  let component: HighlightPillComponent;
  let fixture: ComponentFixture<HighlightPillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighlightPillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightPillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
