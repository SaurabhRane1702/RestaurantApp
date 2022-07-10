import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private _http: HttpClient,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  //Login The User to Resturant Dashboard
  logIn() {
    this._http.get<any>('http://localhost:3000/sign-up').subscribe(
      (res) => {
        const user = res.find((a: any) => {
          return (
            a.email === this.loginForm.value.email &&
            a.password === this.loginForm.value.password
          );
        });
        if (user) {
          alert('Login Succesfully');
          this.loginForm.reset();
          this._router.navigate(['/restaurant-dashboard']);
        } else {
          alert('User Not Found! Please Check Your credecntials');
        }
      },
      (err) => {
        alert('Something went wrong while Login!');
      }
    );
  }
}
