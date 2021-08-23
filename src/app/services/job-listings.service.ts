import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import Filter from '../models/filter.model';
import { JobListing } from '../models/job-listing.model';

import data from './data.json';

@Injectable({
  providedIn: 'root',
})
export class JobListingsService {
  private listings: JobListing[] = [];
  private currentFilters: Filter[] = [];
  public filteredListingsSubject = new BehaviorSubject<JobListing[]>(
    this.listings
  );
  public currentFiltersSubject = new BehaviorSubject<Filter[]>(
    this.currentFilters
  );

  constructor() {
    this.listings = [...data];
    this.filteredListingsSubject.next([...this.listings]);
  }

  public getListings() {
    return [...this.listings];
  }

  private emitUpdate() {
    this.currentFiltersSubject.next(this.currentFilters);
    const newFilteredListings = this.applyFilters();
    this.filteredListingsSubject.next(newFilteredListings);
  }

  public addFilter(filter: Filter) {
    if (this.filterExists(filter) === -1) {
      this.currentFilters.push(filter);
      this.emitUpdate();
    }
  }

  public removeFilter(filter: Filter) {
    const filterIndex = this.filterExists(filter);
    if (filterIndex !== -1) {
      this.currentFilters.splice(filterIndex, 1);
      this.emitUpdate();
    }
  }

  /**
   *
   * @param {Filter} filter : The filter to check against;
   * @returns -1 if the filter does not exist, the number index of the filter otherwise
   */
  private filterExists(filter: Filter) {
    let filterIndex = -1;
    for (let i = 0; i < this.currentFilters.length; i++) {
      const currentFilter = this.currentFilters[i];
      if (
        currentFilter.category === filter.category &&
        currentFilter.value === filter.value
      ) {
        filterIndex = i;
      }
    }
    return filterIndex;
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
