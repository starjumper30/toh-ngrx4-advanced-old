import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {StoreModule} from '@ngrx/store';

import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HeroService} from './hero.service';
import {DashboardModule} from './dashboard/dashboard.module';
import {HeroesModule} from './heroes/heroes.module';
import {reducers} from './store/reducers';
import {EffectsModule} from '@ngrx/effects';
import {HeroListEffects} from './store/hero-list.effects';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, {delay: 600}),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([HeroListEffects]),
    DashboardModule,
    HeroesModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
