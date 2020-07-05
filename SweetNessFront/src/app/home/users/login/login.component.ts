import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private signForm: FormGroup;
  submitted: boolean;
  token: any;


  constructor(private http: HttpClient,private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit() {
    this.signForm =this.formBuilder.group({

      email: ['', Validators.required],
      password: ['', Validators.required],
    });

  }

  get m() {

    return this.signForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.signForm.invalid) {
      return;
    }
    console.log('loginn');
//    console.log(this.loginForm);
    return this.http.post('http://127.0.0.1:8000/api/auth/login'
      , this.signForm.value).subscribe((res: Response) => {
        console.log('role' , res);
       console.log("looooooooog");

        this.token = res['access_token'];
        localStorage.setItem('token', this.token);
        localStorage.setItem('expires_in', res['expires_in']);
        localStorage.setItem('user_id', res['user_id']);
        localStorage.setItem('role', res['role']);

        if(res['role'] == 'admin'){
          this.router.navigate['http://localhost:62183/home'];
          console.log('heey')
        }else{
          this.router.navigate(['/accueil']);

        }
      },
      (error) => {
           console.log(error);
      }
    );
  }
}
