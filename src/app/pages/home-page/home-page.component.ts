import { Component, OnInit } from '@angular/core';

import Filter from 'src/app/models/filter.model';
import { JobListingsService } from 'src/app/services/job-listings.service';
import { JobListing } from 'src/app/models/job-listing.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  public jobListings: JobListing[] = [];
  public appliedFilters: Filter[] = [];

  constructor(private jls: JobListingsService) {}

  ngOnInit(): void {
    this.jls.filteredListingsSubject.subscribe((listings) => {
      this.jobListings = listings;
    });

    this.jls.currentFiltersSubject.subscribe((filters) => {
      this.appliedFilters = [
        { category: 'role', value: 'Frontend' },
        { category: 'languages', value: 'CSS' },
        { category: 'languages', value: 'JavaScript' },
      ];
    });
  }
}
