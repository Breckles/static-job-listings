import { Component, Input, OnInit } from '@angular/core';

import Filter from 'src/app/models/filter.model';

@Component({
  selector: 'app-applied-filters',
  templateUrl: './applied-filters.component.html',
  styleUrls: ['./applied-filters.component.scss'],
})
export class AppliedFiltersComponent implements OnInit {
  @Input()
  filters: Filter[] = [];

  constructor() {}

  ngOnInit(): void {}
}
