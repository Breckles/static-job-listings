import { Component, Input, OnInit } from '@angular/core';

import Filter from 'src/app/models/filter.model';
import { JobListingsService } from 'src/app/services/job-listings.service';

@Component({
  selector: 'app-applied-filters',
  templateUrl: './applied-filters.component.html',
  styleUrls: ['./applied-filters.component.scss'],
})
export class AppliedFiltersComponent {
  @Input()
  filters: Filter[] = [];

  constructor(private jls: JobListingsService) {}

  public onClearFiltersHandler = () => {
    this.jls.clearFilters();
  };
}
