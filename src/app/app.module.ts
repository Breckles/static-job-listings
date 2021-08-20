import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { JobListingsComponent } from './components/job-listings/job-listings.component';
import { JobListingComponent } from './components/job-listings/job-listing/job-listing.component';
import { HighlightPillComponent } from './components/ui/highlight-pill/highlight-pill.component';
import { FilterTabletComponent } from './components/ui/filter-tablet/filter-tablet.component';
import { AppliedFiltersComponent } from './components/applied-filters/applied-filters.component';

@NgModule({
  declarations: [AppComponent, HomePageComponent, LayoutComponent, HeaderComponent, JobListingsComponent, JobListingComponent, HighlightPillComponent, FilterTabletComponent, AppliedFiltersComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
