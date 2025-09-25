import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DriverService} from "../../services/v2/driver.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  form: FormGroup;
  confirmedPassword = true;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private driverService: DriverService) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      password_confirmation: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  submit() {
    if (this.confirmedPassword && this.form.valid) {
      const body = this.setBody();
      this.driverService.register(body)
        .subscribe((response: any) => {
          this.router.navigateByUrl('login');
        });
    }
  }

  validatePassword() {
    this.confirmedPassword = this.form.value.password === this.form.value.password_confirmation;
  }

  setBody() {
    return {
      name: this.form.value.name,
      email: this.form.value.email,
      password: this.form.value.password,
      password_confirmation: this.form.value.password_confirmation,
    };
  }

}
