import { Injectable } from '@angular/core';

import { JobListing } from '../models/job-listing.model';

import data from './data.json';

@Injectable({
  providedIn: 'root',
})
export class JobListingsService {
  private jobListings: JobListing[] | null = null;

  constructor() {
    this.jobListings = [...data];
  }

  public getJobListings() {
    return this.jobListings ? [...this.jobListings] : null;
  }
}
