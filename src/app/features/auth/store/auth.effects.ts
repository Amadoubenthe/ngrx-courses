import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthActions } from './action.types';
import { tap } from 'rxjs';

@Injectable()
export class AuthEffects {
  login$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(AuthActions.login),
        tap((action) =>
          localStorage.setItem('user', JSON.stringify(action.user))
        )
      ),
    { dispatch: false }
  );
  constructor(private action$: Actions) {}
}
