import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  signupForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private _http: HttpClient,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: [''],
      mobile: [''],
      email: [''],
      password: [''],
    });
  }

  //Method to Create User
  signUp() {
    this._http
      .post<any>('http://localhost:3000/sign-up', this.signupForm.value)
      .subscribe(
        (res) => {
          alert('User Record Added Successfully!!!');
          this.signupForm.reset(); //Reset sign Up form
          this._router.navigate(['login']);
        },
        (err) => {
          alert('Something Went Wrong While Sign Up!');
        }
      );
  }
}
