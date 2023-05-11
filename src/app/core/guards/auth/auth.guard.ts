import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthState } from 'src/app/features/auth/store/auth.reducer';
import { Store, select } from '@ngrx/store';
import { tap } from 'rxjs';
import { selectIsLoggedIn } from 'src/app/features/auth/store/auth.selectors';

export const authGuard: CanActivateFn = () => {
  const store = inject(Store<AuthState>);
  const router = inject(Router);

  return store.pipe(
    select(selectIsLoggedIn),
    tap((isLoggedIn) => {
      if (!isLoggedIn) {
        router.navigate(['auth']);
      }
    })
  );
};
