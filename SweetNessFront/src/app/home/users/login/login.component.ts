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


  constructor(private http: HttpClient,private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit() {
    this.signForm =this.formBuilder.group({

      email: ['', Validators.required],
      password: ['', Validators.required],



    });

  }

  onSubmit() {

  }
}
