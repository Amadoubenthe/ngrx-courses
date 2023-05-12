import { Component, OnInit } from '@angular/core';
import { AuthState } from '../auth/store/auth.reducer';
import { Store } from '@ngrx/store';
import { AuthActions } from '../auth/store/action.types';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  constructor(private store: Store<AuthState>) {}

  ngOnInit(): void {
    this.getUserLocalstorage();
  }

  getUserLocalstorage() {
    const user = localStorage.getItem('user');

    if (user) {
      console.log('usr: ' + JSON.parse(user));
      this.store.dispatch(AuthActions.login({ user: JSON.parse(user) }));
    }
  }
}
