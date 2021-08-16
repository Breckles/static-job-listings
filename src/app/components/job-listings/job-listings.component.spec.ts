import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobListingsComponent } from './job-listings.component';
import { JobListingComponent } from './job-listing/job-listing.component';

describe('JobListingsComponent', () => {
  let component: JobListingsComponent;
  let fixture: ComponentFixture<JobListingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobListingsComponent, JobListingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
