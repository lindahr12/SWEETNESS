import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {HttpClient, HttpParams, HttpHeaders} from "@angular/common/http";
import { error } from 'util';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
   httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods': 'PUT, GET, POST, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': "Origin, X-Requested-With, Content-Type, Accept, Authorization",
      'Content-Type':'application/json',
      'Accept':'application/json'
    })
  };
  signForm: any;
  submitted = false;
data;

  constructor(private formbuilder: FormBuilder, private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('http://127.0.0.1:8000/api/get-data').subscribe(data => {

      console.log("Data is coming.",this.data = data);

      }, error => console.error(error));
    this.signForm = this.formbuilder.group(
      {
        nom: ['', Validators.required],
        prenom: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        num_tel: ['', Validators.required],
        num_fax: ['', Validators.required]


      }
    )
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
    console.log('bonjouuuuuuuuuuuuuuuuuuuur');
    console.log(this.signForm);
    // Initialize Params Object
    let Params = new HttpParams();
    // Begin assigning parameters
    Params = Params.append('nom', this.signForm.value.nom);
    Params = Params.append('prenom', this.signForm.value.prenom);
    Params = Params.append('email', this.signForm.value.email);
    Params = Params.append('password', this.signForm.value.password);
    Params = Params.append('num_tel', this.signForm.value.num_tel);
    Params = Params.append('num_fax', this.signForm.value.num_fax);
    console.log(Params);

    return this.http.post('http://127.0.0.1:8000/api/auth/signup'
      , this.signForm.value,this.httpOptions).subscribe((res: Response) => {
      console.log(res);
      //this.registerForm.reset();
    },
    error=>console.log(error)


    );
  }
}

