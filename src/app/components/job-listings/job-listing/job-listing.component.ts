import { Component, Input, OnInit } from '@angular/core';
import JobListing from 'src/app/models/job-listing.model';

@Component({
  selector: 'app-job-listing',
  templateUrl: './job-listing.component.html',
  styleUrls: ['./job-listing.component.scss'],
})
export class JobListingComponent {
  @Input()
  listing: JobListing | null = null;

  constructor() {}
}
