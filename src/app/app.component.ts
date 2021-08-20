import { Component, OnInit } from '@angular/core';
import JobListing from './models/job-listing.model';

import { JobListingsService } from './services/job-listings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public jobListings: JobListing[] = [];

  constructor() {}
}
