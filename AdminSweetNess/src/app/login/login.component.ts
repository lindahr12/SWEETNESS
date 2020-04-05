import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient, HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: any;
  submitted = false;


  constructor(private formbuilder: FormBuilder, private http: HttpClient) {
  }

  ngOnInit() {
    this.loginForm = this.formbuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
      }
    )
  }

  get m() {

    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    console.log('loginn');
    console.log(this.loginForm);
    // Initialize Params Object
    let Params = new HttpParams();
    // Begin assigning parameters

    Params = Params.append('secondParameter', this.loginForm.value.email);
    Params = Params.append('firstParameter', this.loginForm.value.password);


    return this.http.post('http://127.0.01:8000/user'
      , {
        params: {params: Params}
      }).subscribe((res: Response) => {
      alert(res);
      //this.registerForm.reset();
    });
  }
}
