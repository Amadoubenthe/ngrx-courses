import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

export interface User {
  id: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = 'localhost:8888';
  // /auth/login

  constructor(private http: HttpClient) {}

  // login(credentials: any): Observable<any> {
  //   return this.http.post(this.baseUrl, credentials, { responseType: 'text' });
  // }

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>('http://localhost:8888/auth/login', {
      email,
      password,
    });
  }
}
