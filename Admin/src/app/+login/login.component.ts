import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signInForm: FormGroup;
  isSigningIn = false;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authService: AuthService) {
    this.signInForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  ngOnInit() {
  }

  submit() {
    this.isSigningIn = true;
    const credentials = {
      email: this.signInForm.value.email,
      password: this.signInForm.value.password,
    };
    this.authService.signIn(credentials)
      .subscribe((response: any) => {
        localStorage.setItem('auth_token', response.auth_token);
        localStorage.setItem('email', response.email);
        this.router.navigateByUrl('/');
        console.log(response);
      }, error => {
        this.isSigningIn = false;
      }, () => {
        this.isSigningIn = false;
      });
  }
}
