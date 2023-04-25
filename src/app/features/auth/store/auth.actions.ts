import { createAction, props } from '@ngrx/store';
import { IToken } from '../../../core/services/auth/auth.service';
// import { IToken } from 'src/app/core/services/auth/auth.service';

export const login = createAction(
  '[Login Component] User Login',
  props<{ token: IToken }>()
);
