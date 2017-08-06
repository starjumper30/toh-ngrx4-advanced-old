import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HeroService} from './hero.service';
import {DashboardModule} from './dashboard/dashboard.module';
import {HeroesModule} from './heroes/heroes.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, {delay: 600}),
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
