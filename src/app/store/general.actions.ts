import {ActionEnum, ActionEnumValue} from 'ngrx-enums';

export class GeneralAction<T> extends ActionEnumValue<T> {
  constructor(name: string) {
    super(name);
  }
}

export class GeneralActionEnumType extends ActionEnum<GeneralAction<any>> {
  SET_ERROR: GeneralAction<any> = new GeneralAction<any>('[General] Set Error');

  constructor() {
    super();
    this.initEnum('GeneralActions');
  }
}

export const GeneralActionEnum: GeneralActionEnumType = new GeneralActionEnumType();
