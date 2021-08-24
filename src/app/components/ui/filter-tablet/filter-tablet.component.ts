import { Component, Input, OnInit } from '@angular/core';
import Filter from 'src/app/models/filter.model';

import { JobListingsService } from 'src/app/services/job-listings.service';

@Component({
  selector: 'app-filter-tablet',
  templateUrl: './filter-tablet.component.html',
  styleUrls: ['./filter-tablet.component.scss'],
})
export class FilterTabletComponent implements OnInit {
  @Input()
  public mode: 'add' | 'remove' = 'add';
  @Input()
  public filter: Filter | null = null;

  constructor(private jls: JobListingsService) {}

  ngOnInit(): void {}

  public onAddFilterHandler() {
    this.jls.addFilter(this.filter!);
  }

  public onRemoveFilterHandler() {
    this.jls.removeFilter(this.filter!);
  }
}
