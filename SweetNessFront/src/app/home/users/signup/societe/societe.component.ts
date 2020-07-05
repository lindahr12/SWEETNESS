import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClient, HttpParams, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-societe',
  templateUrl: './societe.component.html',
  styleUrls: ['./societe.component.css']
})
export class SocieteComponent implements OnInit {
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods': 'PUT, GET, POST, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': "Origin, X-Requested-With, Content-Type, Accept, Authorization",
      'Content-Type':'application/json',
      'Accept':'application/json'
    })
  };
  private societeform: FormGroup;
  constructor(private http: HttpClient,private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit() {
    this.societeform =this.formBuilder.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      email: ['', Validators.required],
      email_societe: ['', Validators.required],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required],
      num_tel: ['', Validators.required],
      num_fax: ['', Validators.required],
      region: ['', Validators.required],
      rue: ['', Validators.required],
      code_postale: ['', Validators.required],
     raison_sociale: ['', Validators.required],
     Description: ['', Validators.required],
     statue: ['', Validators.required],
     matriculation_fiscale: ['', Validators.required],
    });

  }
  addsociete() {
    console.log("adddddddddddddd");
    console.log(this.societeform.value);
    let Params = new HttpParams();
    // Begin assigning parameters
    Params = Params.append('nom', this.societeform.value.nom);
    Params = Params.append('prenom', this.societeform.value.prenom);
    Params = Params.append('email', this.societeform.value.email);
    Params = Params.append('password', this.societeform.value.password);
    Params = Params.append('num_tel', this.societeform.value.num_tel);
    Params = Params.append('num_fax', this.societeform.value.num_fax);
    Params = Params.append('password_confirmation', this.societeform.value.confirm_password);
    Params = Params.append('region', this.societeform.value.region);
    Params = Params.append('code_postale', this.societeform.value.code_postale);
    Params = Params.append('raison_sociale', this.societeform.value.raison_sociale);
    Params = Params.append('Description', this.societeform.value.Description);
    Params = Params.append('statue', this.societeform.value.statue);
    Params = Params.append('matriculation_fiscale', this.societeform.value.matriculation_fiscale);

    Params = Params.append('token_validation', '1');


    return this.http.post('http://127.0.0.1:8000/api/auth/signup'
      , this.societeform.value,this.httpOptions).subscribe((res: Response) => {
      console.log("looooooooog");
    },error => {
      console.log(error);
    });
  }
}
