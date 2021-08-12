import { Component } from '@angular/core';

import { JobListingsService } from './services/job-listings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(jls: JobListingsService) {}
}
