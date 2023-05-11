import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducer';

export const selectAuthFeature = createFeatureSelector<AuthState>('auth');

export const selectIsLoggedIn = createSelector(
  selectAuthFeature,
  (state: AuthState) => !!state?.user
);

export const selectIsLoggedOut = createSelector(
  selectAuthFeature,
  (state: AuthState) => !state?.user
);
