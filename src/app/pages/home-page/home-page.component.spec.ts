import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobListingsService } from 'src/app/services/job-listings.service';

import { HomePageComponent } from './home-page.component';
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

  beforeEach(async () => {
    const spyService = jasmine.createSpyObj('JobListingService', {
      getJobListings: jobListings,
    });

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

  it('Should retrieve a list of job listings during initialization', () => {
    expect(component.jobListings).toBeNull();

    component.ngOnInit();
    expect(component.jobListings).toEqual(jobListings);
  });
});
