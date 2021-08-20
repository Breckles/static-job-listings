import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import Filter from '../models/filter.model';
import { JobListing } from '../models/job-listing.model';

import data from './data.json';

@Injectable({
  providedIn: 'root',
})
export class JobListingsService {
  public filteredListingsSubject = new BehaviorSubject<JobListing[] | null>(
    null
  );
  public currentFiltersSubject = new BehaviorSubject<Filter[]>([]);
  private listings: JobListing[] = [];
  private currentFilters: Filter[] = [];

  constructor() {
    this.listings = [...data];
    this.filteredListingsSubject.next([...this.listings]);
  }

  public getListings() {
    return [...this.listings];
  }

  public addFilter(filter: Filter) {
    if (!this.filterExists(filter)) {
      this.currentFilters.push(filter);
      const newFilteredListings = this.applyFilters();
      this.filteredListingsSubject.next(newFilteredListings);
    }
  }

  private filterExists(filter: Filter) {
    let filterExists = false;
    for (const currentFilter of this.currentFilters) {
      if (
        currentFilter.category === filter.category &&
        currentFilter.value === filter.value
      ) {
        filterExists = true;
      }
    }
    return filterExists;
  }

  private applyFilters() {
    let filteredListings: JobListing[] = [...this.listings];

    if (this.currentFilters.length > 0) {
      filteredListings = this.listings.filter((listing) => {
        for (const filter of this.currentFilters) {
          const categoryValue = listing[filter.category];
          if (Array.isArray(categoryValue)) {
            if (!categoryValue.find((value) => value === filter.value)) {
              return false;
            }
          } else {
            if (categoryValue !== filter.value) {
              return false;
            }
          }
        }
        return true;
      });
    }

    return filteredListings;
  }
}
