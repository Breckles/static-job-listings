import { TestBed } from '@angular/core/testing';

import { JobListingsService } from './job-listings.service';

import { isJobListing } from '../models/job-listing.model';

describe('JobListingsService', () => {
  let service: JobListingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobListingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('The jobListings value should be initialized', () => {
    expect(service.getJobListings()).toBeTruthy();
  });

  it('Items in jobListings should be of JobListing type', () => {
    const jobListings = service.getJobListings();
    if (jobListings) {
      for (const jobListing of jobListings) {
        expect(isJobListing(jobListing)).toBeTrue();
      }
    }
  });
});
