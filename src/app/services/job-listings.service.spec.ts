import { fakeAsync, TestBed } from '@angular/core/testing';

import { JobListingsService } from './job-listings.service';

import { isJobListing } from '../models/job-listing.model';

import data from './data.json';

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
    expect(service.getListings().length).toBeGreaterThan(0);
  });

  it('Items in jobListings should be of JobListing type', () => {
    const jobListings = service.getListings();
    if (jobListings) {
      for (const jobListing of jobListings) {
        expect(isJobListing(jobListing)).toBeTrue();
      }
    }
  });

  it('filterExists Should return -1 if the filter does not exist, the index of the filter otherwise.', () => {
    service['currentFilters'] = [
      { category: 'role', value: 'testValue' },
      { category: 'level', value: 'Senior' },
    ];
    expect(
      service['filterExists']({ category: 'role', value: 'fail' })
    ).toEqual(-1);
    expect(
      service['filterExists']({ category: 'role', value: 'testValue' })
    ).toEqual(0);

    expect(
      service['filterExists']({ category: 'level', value: 'Senior' })
    ).toEqual(1);
  });

  it('addFilter should add the new filter to currentFilters', () => {
    expect(service['currentFilters']).toEqual([]);

    service.addFilter({ category: 'languages', value: 'JavaScript' });
    expect(service['currentFilters']).toEqual([
      { category: 'languages', value: 'JavaScript' },
    ]);

    service.addFilter({ category: 'languages', value: 'JavaScript' });
    expect(service['currentFilters']).toEqual([
      { category: 'languages', value: 'JavaScript' },
    ]);

    service.addFilter({ category: 'level', value: 'Senior' });
    expect(service['currentFilters']).toEqual([
      { category: 'languages', value: 'JavaScript' },
      { category: 'level', value: 'Senior' },
    ]);
  });

  it('removeFilter should remove the filter from currentFilters if it exists', () => {
    service['currentFilters'] = [
      { category: 'languages', value: 'JavaScript' },
      { category: 'level', value: 'Senior' },
      { category: 'tools', value: 'Sass' },
    ];
    expect(service['currentFilters']).toEqual([
      { category: 'languages', value: 'JavaScript' },
      { category: 'level', value: 'Senior' },
      { category: 'tools', value: 'Sass' },
    ]);
    service.removeFilter({ category: 'level', value: 'Junior' });
    expect(service['currentFilters']).toEqual([
      { category: 'languages', value: 'JavaScript' },
      { category: 'level', value: 'Senior' },
      { category: 'tools', value: 'Sass' },
    ]);
    service.removeFilter({ category: 'level', value: 'Senior' });
    expect(service['currentFilters']).toEqual([
      { category: 'languages', value: 'JavaScript' },
      { category: 'tools', value: 'Sass' },
    ]);
  });

  it('applyFilters should return an array of listings that match the currentFilters', () => {
    const mockListings = [
      {
        id: 7,
        company: 'Shortly',
        logo: 'shortly.svg',
        new: false,
        featured: false,
        position: 'Junior Developer',
        role: 'Frontend',
        level: 'Junior',
        postedAt: '2w ago',
        contract: 'Full Time',
        location: 'Worldwide',
        languages: ['HTML', 'JavaScript'],
        tools: ['Sass'],
      },
      {
        id: 8,
        company: 'Insure',
        logo: 'insure.svg',
        new: false,
        featured: false,
        position: 'Junior Frontend Developer',
        role: 'Frontend',
        level: 'Senior',
        postedAt: '2w ago',
        contract: 'Full Time',
        location: 'USA Only',
        languages: ['JavaScript'],
        tools: ['Vue', 'Sass'],
      },
    ];

    service['listings'] = mockListings;

    expect(service['applyFilters']().length).toEqual(2);

    service.addFilter({ category: 'languages', value: 'JavaScript' });
    expect(service['applyFilters']().length).toEqual(2);

    service.addFilter({ category: 'level', value: 'Senior' });
    expect(service['applyFilters']().length).toEqual(1);
  });
});
