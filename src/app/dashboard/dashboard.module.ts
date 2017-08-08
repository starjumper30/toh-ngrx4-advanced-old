import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardComponent} from './dashboard.component';
import {HeroSearchModule} from '../hero-search/hero-search.module';
import {DashboardViewComponent} from './dashboard-view.component';

@NgModule({
  imports: [
    CommonModule,
    HeroSearchModule
  ],
  declarations: [
    DashboardComponent,
    DashboardViewComponent
  ],
  exports: [
    DashboardComponent
  ],
  providers: []
})
export class DashboardModule { }
