import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm),
  ]);

  loginForm = new FormGroup({
    email: this.email,
    password: this.password,
  });

  showAlert = false;
  alertMsg = 'Please wait! Checking your account.';
  alertColor = 'blue';

  OnLogin() {
    console.log(this.email, 'email');
    console.log(this.password, 'password');

    this.showAlert = true;
  }
}
