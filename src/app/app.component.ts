import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  selectIsLoggedIn,
  selectIsLoggedOut,
} from './features/auth/store/auth.selectors';
import { AuthState } from './features/auth/store/auth.reducer';
import { AuthActions } from './features/auth/store/action.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isOpen!: boolean;
  isLoggedIn$!: Observable<boolean>;
  isLoggedOut$!: Observable<boolean>;

  constructor(private store: Store<AuthState>) {}

  ngOnInit(): void {
    // this.getUserLocalstorage();
    this.isOpen = false;
    this.getStore();
  }

  getStore(): void {
    this.isLoggedIn$ = this.store.pipe(select(selectIsLoggedIn));

    this.isLoggedOut$ = this.store.pipe(select(selectIsLoggedOut));
  }

  toggleSide() {
    this.isOpen = !this.isOpen;
  }

  isOpenChange(event: boolean) {
    this.isOpen = event;
  }
}
