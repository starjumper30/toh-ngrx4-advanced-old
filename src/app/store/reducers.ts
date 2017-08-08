import {ActionReducerMap} from '@ngrx/store';

import {heroListReducer, HeroListState} from './hero-list.reducer';
import {heroReducer, HeroState} from './hero.reducer';

export interface AppState {
  heroes: HeroListState;
  hero: HeroState;
}

export const reducers: ActionReducerMap<AppState> = {
  heroes: heroListReducer,
  hero: heroReducer
};
