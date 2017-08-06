import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeroesComponent} from './heroes.component';
import {HeroDetailModule} from '../hero-detail/hero-detail.module';

@NgModule({
  imports: [
    CommonModule,
    HeroDetailModule
  ],
  declarations: [
    HeroesComponent
  ],
  exports: [
    HeroesComponent
  ],
  providers: []
})
export class HeroesModule {
}
