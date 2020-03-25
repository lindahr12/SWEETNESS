import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
res:any;
header : HttpHeaders;
submitted:boolean;
//body vide

formgrp : FormGroup;

  constructor(private http: HttpClient, private fb:FormBuilder ) { 
    this.header = new HttpHeaders({
      'Access-Control-Allow-Origin': 'http://localhost:4200', // -->Add this line
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
      'Access-Control-Allow-Headers': '*',
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    
  }

  ngOnInit() {
    this.formgrp = this.fb.group({
      name: ['', Validators.required],    
    });

  }
  
  onSubmit() {
    console.log(this.formgrp.value);
    this.http.post('http://127.0.0.1:8000/post-data', JSON.stringify(this.formgrp.value), {headers: this.header}).subscribe(res => {
    this.res = res;
      console.log("categorie : "+(res));
     
    }, error => console.error(error));
 
  }
  

}
