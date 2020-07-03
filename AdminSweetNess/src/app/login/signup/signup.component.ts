import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {HttpClient, HttpParams, HttpHeaders} from "@angular/common/http";
import { error } from 'util';
import {Router} from "@angular/router";
import Swal from "sweetalert2";

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
  private notifier: any;

  constructor(private formbuilder: FormBuilder, private http: HttpClient,private router: Router) {

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
    Params = Params.append('nom', this.signForm.value.nom);
    Params = Params.append('prenom', this.signForm.value.prenom);
    Params = Params.append('email', this.signForm.value.email);
    Params = Params.append('password', this.signForm.value.password);
    Params = Params.append('num_tel', this.signForm.value.num_tel);
    Params = Params.append('num_fax', this.signForm.value.num_fax);
    Params = Params.append('statue_compte', '0');
    console.log(Params);

    return this.http.post('http://127.0.0.1:8000/api/auth/signup'
      , this.signForm.value,this.httpOptions).subscribe((res: Response) => {
      console.log(res);
      Swal.fire({
          title: '\n' +
            'utilisateur ajouté avec succès',
          text: "ajouter un nouveau !",
          showCancelButton: true,
          confirmButtonColor: '#298fca',
          cancelButtonColor: '#d33',
          }).then((result) => {
            if(!result.value)
            this.router.navigate(['/']);
             else {
               this.signForm.reset();
            }
      });
        //this.router.navigate(['/']);


      },
    error=>console.log(error)


    );
  }
}

