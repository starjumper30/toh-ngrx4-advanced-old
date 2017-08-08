import {Hero} from '../hero';
import {createSelector, Selector} from '@ngrx/store';
import {AppState} from './reducers';
import * as heroActions from './hero.actions';

export type HeroState = {
  selectedHero: Hero,
  addingHero: boolean
};

const initialState: HeroState = {
  selectedHero: null,
  addingHero: false
};

export function heroReducer(state = initialState, action: heroActions.Actions): HeroState {
  switch (action.type) {
    case heroActions.RESET_BLANK_HERO: {
      return {...state, selectedHero: new Hero()};
    }
    case heroActions.SET_ADDING_HERO: {
      return {...state, selectedHero: null, addingHero: action.payload};
    }
    case heroActions.GET_HERO_SUCCESS: {
      return {...state, selectedHero: action.payload};
    }
    case heroActions.DELETE_HERO_SUCCESS: {
      return {...state, selectedHero: null};
    }
    case heroActions.SELECT_HERO: {
      return {...state, selectedHero: action.payload, addingHero: false};
    }
    default: {
      return state;
    }
  }
}

const getHeroState: Selector<AppState, HeroState> =
  (state: AppState) => state.hero;

export const getSelectedHero: Selector<AppState, Hero> =
  createSelector(getHeroState, (state: HeroState) => {
    return state.selectedHero;
  });

export const getAddingHero: Selector<AppState, boolean> =
  createSelector(getHeroState, (state: HeroState) => {
    return state.addingHero;
  });
