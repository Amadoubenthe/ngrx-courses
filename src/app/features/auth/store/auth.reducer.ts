import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/core/models/user.model';
import { AuthActions } from './action.types';

export interface AuthState {
  user: User | undefined;
}

export const initialAuthState: AuthState = {
  user: undefined,
};

export const authReducers = createReducer(
  initialAuthState,

  on(AuthActions.login, (state, action) => {
    return {
      user: action.user,
    };
  }),

  on(AuthActions.logout, (state, action) => {
    return { user: undefined };
  })
);
