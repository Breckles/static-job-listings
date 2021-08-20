import { Component, OnInit } from '@angular/core';
import JobListing from './models/job-listing.model';

import { JobListingsService } from './services/job-listings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public jobListings: JobListing[] | null = null;

  constructor(private jls: JobListingsService) {}

  ngOnInit() {
    this.jobListings = this.jls.getListings();
  }
}
