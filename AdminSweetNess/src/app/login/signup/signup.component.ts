import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {HttpClient, HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signForm: any;
  submitted = false;


  constructor(private formbuilder: FormBuilder, private http: HttpClient) {
  }

  ngOnInit() {
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
    Params = Params.append('firstParameter', this.signForm.value.nom);
    Params = Params.append('firstParameter', this.signForm.value.prenom);
    Params = Params.append('secondParameter', this.signForm.value.email);
    Params = Params.append('firstParameter', this.signForm.value.password);
    Params = Params.append('firstParameter', this.signForm.value.num_tel);
    Params = Params.append('firstParameter', this.signForm.value.num_fax);

    return this.http.post('http://127.0.01:8000/user'
      , {
        params: {params: Params}
      }).subscribe((res: Response) => {
      alert(res);
      //this.registerForm.reset();
    });
  }
}

