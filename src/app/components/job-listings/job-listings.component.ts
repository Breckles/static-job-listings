import { Component, Input, OnInit } from '@angular/core';
import JobListing from 'src/app/models/job-listing.model';

@Component({
  selector: 'app-job-listings',
  templateUrl: './job-listings.component.html',
  styleUrls: ['./job-listings.component.scss'],
})
export class JobListingsComponent {
  @Input()
  public listings: JobListing[] | null = null;

  constructor() {}
}
