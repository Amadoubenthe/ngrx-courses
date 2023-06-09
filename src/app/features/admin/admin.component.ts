import { Component, OnInit } from '@angular/core';
import { AuthState } from '../auth/store/auth.reducer';
import { Store } from '@ngrx/store';
import { AuthActions } from '../auth/store/action.types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  constructor(private store: Store<AuthState>, private router: Router) {}

  ngOnInit(): void {
    this.getUserLocalstorage();
  }

  getUserLocalstorage() {
    const user = localStorage.getItem('user');

    if (user) {
      console.log(' Mon usese existe user: ' + JSON.parse(user));
      this.store.dispatch(AuthActions.login({ user: JSON.parse(user) }));
      this.router.navigateByUrl('/admin');
    }
  }
}
