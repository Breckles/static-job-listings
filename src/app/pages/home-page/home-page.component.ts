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
  public listings = [
    {
      id: 1,
      company: 'Photosnap',
      logo: 'photosnap.svg',
      new: true,
      featured: true,
      position: 'Senior Frontend Developer',
      role: 'Frontend',
      level: 'Senior',
      postedAt: '1d ago',
      contract: 'Full Time',
      location: 'USA Only',
      languages: ['HTML', 'CSS', 'JavaScript'],
      tools: [],
    },
  ];

  constructor(private jls: JobListingsService) {}

  ngOnInit(): void {
    this.jobListings = this.jls.getJobListings();
  }
}
