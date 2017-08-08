import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeroesComponent} from './heroes.component';
import {HeroDetailModule} from '../hero-detail/hero-detail.module';
import {HeroesViewComponent} from './heroes-view.component';

@NgModule({
  imports: [
    CommonModule,
    HeroDetailModule
  ],
  declarations: [
    HeroesComponent,
    HeroesViewComponent
  ],
  exports: [
    HeroesComponent
  ],
  providers: []
})
export class HeroesModule {
}
