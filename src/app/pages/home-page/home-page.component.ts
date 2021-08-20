import { Component, OnInit } from '@angular/core';

import { JobListingsService } from 'src/app/services/job-listings.service';
import { JobListing } from 'src/app/models/job-listing.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  public jobListings: JobListing[] | null = null;

  constructor(private jls: JobListingsService) {}

  ngOnInit(): void {
    this.jobListings = this.jls.getListings();
  }
}
