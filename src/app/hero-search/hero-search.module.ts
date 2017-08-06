import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeroSearchComponent} from './hero-search.component';
import {HeroSearchService} from './hero-search.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeroSearchComponent
  ],
  exports: [
    HeroSearchComponent
  ],
  providers: [HeroSearchService]
})
export class HeroSearchModule {
}
