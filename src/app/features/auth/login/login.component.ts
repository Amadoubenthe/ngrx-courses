import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
  AbstractControl,
} from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  emailControl!: FormControl;
  passwordControl!: FormControl;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

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

  onSubmit(): void {
    console.log(this.loginForm.value);
    const { email, password } = this.loginForm.value;
    this.authService.login(email, password).subscribe((res) => {
      console.log(res);
    });
  }
}
