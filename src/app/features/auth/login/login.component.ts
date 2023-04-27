import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
  AbstractControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { noop, tap } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { AppState } from 'src/app/store';
import { User } from 'src/app/core/models/user.model';
import { AuthActions } from '../store/action.types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  emailControl!: FormControl;
  passwordControl!: FormControl;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.initFormControls();
    this.initForm();
  }

  initForm(): void {
    this.loginForm = this.fb.group({
      email: this.emailControl,
      password: this.passwordControl,
    });
  }

  initFormControls(): void {
    this.emailControl = new FormControl(
      'amadouAdmin@test.com',
      Validators.required
    );
    this.passwordControl = new FormControl('password', Validators.required);
  }

  getFormControlErrorText(ctrl: AbstractControl) {
    if (ctrl.hasError('required')) {
      return 'Ce champ est requis';
    } else if (ctrl.hasError('email')) {
      return "Merci d'entrer une adresse mail valide";
    } else if (ctrl.hasError('minlength')) {
      return 'Veuillez saisir au moins 5 caractères';
    } else if (ctrl.hasError('maxlength')) {
      return 'Trop long';
    } else {
      return 'Ce champ contient une erreur';
    }
  }

  login(): void {
    const { email, password } = this.loginForm.value;

    this.authService
      .login(email, password)
      .pipe(
        tap((user: User) => {
          this.store.dispatch(AuthActions.login({ user: user }));

          this.router.navigateByUrl('/admin');
        })
      )
      .subscribe(noop, () => alert('Login failed'));
  }
}
