import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobListingComponent } from './job-listing.component';
import { FilterTabletComponent } from '../../ui/filter-tablet/filter-tablet.component';
import { HighlightPillComponent } from '../../ui/highlight-pill/highlight-pill.component';

describe('JobListingComponent', () => {
  let component: JobListingComponent;
  let fixture: ComponentFixture<JobListingComponent>;

  const jobListingTrue = {
    id: 1,
    company: 'Photosnap',
    logo: 'photosnap.svg',
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
  };
  const jobListingFalse = {
    id: 1,
    company: 'Photosnap',
    logo: 'photosnap.svg',
    new: false,
    featured: false,
    position: 'Senior Frontend Developer',
    role: 'Frontend',
    level: 'Senior',
    postedAt: '1d ago',
    contract: 'Full Time',
    location: 'USA Only',
    languages: ['HTML', 'CSS', 'JavaScript'],
    tools: [],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        JobListingComponent,
        HighlightPillComponent,
        FilterTabletComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should display a highlight pill if the listing is new', () => {
    component.listing = jobListingFalse;
    fixture.detectChanges();
    let componentEl = fixture.nativeElement as HTMLElement;
    let highLightPillNew = componentEl.querySelector('app-highlight-pill.new');
    expect(highLightPillNew).toBeNull();

    component.listing = jobListingTrue;
    fixture.detectChanges();
    componentEl = fixture.nativeElement as HTMLElement;
    highLightPillNew = componentEl.querySelector('app-highlight-pill.new');
    expect(highLightPillNew).toBeDefined();
    expect(highLightPillNew?.innerHTML).toContain('NEW!');
  });

  it('Should display a highlight pill if the listing is featured', () => {
    component.listing = jobListingFalse;
    fixture.detectChanges();
    let componentEl = fixture.nativeElement as HTMLElement;
    let highLightPillFeatured = componentEl.querySelector(
      'app-highlight-pill.featured'
    );
    expect(highLightPillFeatured).toBeNull();

    component.listing = jobListingTrue;
    fixture.detectChanges();
    componentEl = fixture.nativeElement as HTMLElement;
    highLightPillFeatured = componentEl.querySelector(
      'app-highlight-pill.featured'
    );
    expect(highLightPillFeatured).toBeDefined();
    expect(highLightPillFeatured?.innerHTML).toContain('FEATURED');
  });

  it('Should display the correct amount of filter tablets', () => {
    // 2 = role & level, which are assumed to always be present
    const correctAmount =
      2 + jobListingTrue.tools.length + jobListingTrue.languages.length;

    component.listing = jobListingTrue;
    fixture.detectChanges();
    const componentEl = fixture.nativeElement as HTMLElement;
    const filterTablets = componentEl.querySelectorAll('app-filter-tablet');

    expect(filterTablets.length).toEqual(correctAmount);
  });
});
