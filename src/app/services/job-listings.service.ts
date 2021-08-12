import { Injectable } from '@angular/core';

import { JobListing } from '../models/job-listing.model';

import data from './data.json';

@Injectable({
  providedIn: 'root',
})
export class JobListingsService {
  jobListings: JobListing[] = [];

  constructor() {
    this.jobListings = [...data];
  }
}
