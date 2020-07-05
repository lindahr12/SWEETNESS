import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  private userform: FormGroup;



  constructor(private http: HttpClient,private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit() {
    this.userform =this.formBuilder.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      num_tel: ['', Validators.required],
      num_fax: ['', Validators.required],
      region: ['', Validators.required],
      rue: ['', Validators.required],
      code_postale: ['', Validators.required],
    });

  }

  adduser() {
    this.http.post()  }
}
