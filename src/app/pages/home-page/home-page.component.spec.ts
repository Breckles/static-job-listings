import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';

import JobListing from 'src/app/models/job-listing.model';
import Filter from 'src/app/models/filter.model';
import { HomePageComponent } from './home-page.component';
import { JobListingsService } from 'src/app/services/job-listings.service';
import { JobListingsComponent } from '../../components/job-listings/job-listings.component';
import { JobListingComponent } from '../../components/job-listings/job-listing/job-listing.component';

const jobListings = [
  {
    id: 1,
    company: 'Photosnap',
    logo: './images/photosnap.svg',
    new: true,
    featured: true,
    position: 'Senior Frontend Developer',
    role: 'Frontend',
    level: 'Senior',
    postedAt: '1d ago',
    contract: 'Full Time',
    location: 'USA Only',
    languages: ['HTML', 'CSS', 'JavaScript'],
    tools: [],
  },
  {
    id: 2,
    company: 'Manage',
    logo: './images/manage.svg',
    new: true,
    featured: true,
    position: 'Fullstack Developer',
    role: 'Fullstack',
    level: 'Midweight',
    postedAt: '1d ago',
    contract: 'Part Time',
    location: 'Remote',
    languages: ['Python'],
    tools: ['React'],
  },
];

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  const filteredListingsSubject = new BehaviorSubject<JobListing[]>([]);
  const currentFiltersSubject = new BehaviorSubject<Filter[]>([]);

  const spyService = jasmine.createSpyObj(
    'JobListingsService',
    {
      getListings: jobListings,
    },
    { filteredListingsSubject, currentFiltersSubject }
  );

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomePageComponent,
        JobListingsComponent,
        JobListingComponent,
      ],
      providers: [{ provide: JobListingsService, useValue: spyService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should update the list of job listings when a new one is emitted', () => {
    expect(component.jobListings).toEqual([]);

    filteredListingsSubject.next(jobListings);
    component.ngOnInit();
    expect(component.jobListings).toEqual(jobListings);
  });

  it('Should update the list of filters when a new one is emitted', fakeAsync(() => {
    expect(component.appliedFilters).toEqual([]);

    const newFilter: Filter = { category: 'languages', value: 'HTML' };
    currentFiltersSubject.next([newFilter]);
    fixture.detectChanges();
    expect(component.appliedFilters).toEqual([newFilter]);
  }));
});
