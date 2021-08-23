import { Component, OnDestroy, OnInit } from '@angular/core';

import Filter from 'src/app/models/filter.model';
import { JobListingsService } from 'src/app/services/job-listings.service';
import { JobListing } from 'src/app/models/job-listing.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, OnDestroy {
  public jobListings: JobListing[] = [];
  public appliedFilters: Filter[] = [];
  private listingSub: Subscription = new Subscription();
  private filterSub: Subscription = new Subscription();

  constructor(private jls: JobListingsService) {}

  ngOnInit(): void {
    this.listingSub = this.jls.filteredListingsSubject.subscribe((listings) => {
      this.jobListings = listings;
    });

    this.filterSub = this.jls.currentFiltersSubject.subscribe((filters) => {
      // this.appliedFilters = [
      //   { category: 'role', value: 'Frontend' },
      //   { category: 'languages', value: 'CSS' },
      //   { category: 'languages', value: 'JavaScript' },
      // ];
      this.appliedFilters = filters;
    });
  }

  ngOnDestroy() {
    this.listingSub.unsubscribe();
    this.filterSub.unsubscribe();
  }
}
