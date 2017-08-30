import {Record} from 'immutable';

export interface HeroParam {
  id?: number;
  name?: string;
}

export class Hero extends Record({id: null, name: null}) {
  readonly id: number;
  readonly name: string;

  constructor(params?: HeroParam) {
    params ? super(params) : super();
  }

  assign(values: HeroParam) {
    return this.merge(values) as this;
  }
}

/**
 * An alternative implementation:
 *
 *
interface TRecord<T, P> {
  assign: { (values: P): T};
}

function assign<P, T>(values: P) {
  return this.merge(values) as T;
}

export interface HeroParam {
  id?: number;
  name?: string;
}

export interface Hero extends TRecord<Hero, HeroParam> {
  readonly id: number;
  name: string;
}
const HeroClass: Record.Class  = Record({id: null, name: null, assign} as Hero);

export function Hero(params?: HeroParam): Hero {
  return (<any> (params ? new HeroClass(params) :  new HeroClass())) as Hero;
}
*/
