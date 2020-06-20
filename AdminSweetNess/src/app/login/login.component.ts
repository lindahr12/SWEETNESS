import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: any;
  submitted = false;

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods': 'PUT, GET, POST, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': "Origin, X-Requested-With, Content-Type, Accept, Authorization",
      'Content-Type':'application/json',
      'Accept':'application/json'
    })
  };
  private data: Object;
  private token: any;
  constructor(private formbuilder: FormBuilder, private http: HttpClient,private router: Router) {

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


    return this.http.post('http://127.0.0.1:8000/api/auth/login'
      , this.loginForm.value).subscribe((res: Response) => {

       // console.log(res.token);

        this.token = res['access_token'];
        localStorage.setItem('token', this.token);
        localStorage.setItem('expires_in', res['expires_in']);
        this.router.navigate(['/home']);
      },
      (error) => {
        localStorage.removeItem('token');

      }
    );
  }
}
