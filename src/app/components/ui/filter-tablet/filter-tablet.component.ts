import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-tablet',
  templateUrl: './filter-tablet.component.html',
  styleUrls: ['./filter-tablet.component.scss'],
})
export class FilterTabletComponent implements OnInit {
  @Input()
  public mode: 'add' | 'remove' = 'add';
  @Input()
  public category: string | null = null;
  @Input()
  public value: string | null = null;

  constructor() {}

  ngOnInit(): void {}
}
