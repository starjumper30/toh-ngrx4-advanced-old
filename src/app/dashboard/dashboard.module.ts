import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardComponent} from './dashboard.component';
import {HeroSearchModule} from '../hero-search/hero-search.module';

@NgModule({
  imports: [
    CommonModule,
    HeroSearchModule
  ],
  declarations: [
    DashboardComponent
  ],
  exports: [
    DashboardComponent
  ],
  providers: []
})
export class DashboardModule { }
