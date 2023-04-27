import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/core/models/user.model';

export const login = createAction(
  '[Login Component] User Login',
  props<{ user: User }>()
);

export const logout = createAction('[Logout Component] User Logout');
