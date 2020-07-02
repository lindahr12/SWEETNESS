import { Component, OnInit } from '@angular/core';
import {NgxDropzoneChangeEvent} from "ngx-dropzone";
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {DomSanitizer} from "@angular/platform-browser";
import {Router} from "@angular/router";

@Component({
  selector: 'app-lot',
  templateUrl: './lot.component.html',
  styleUrls: ['./lot.component.css']
})
export class LotComponent implements OnInit {
  files: any;
  produit: any;
  parent_id: any;
  lot:any;
  produit_id: any;
  private formlot: FormGroup;
  constructor(private http: HttpClient,private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit() {
    this.http.get('http://127.0.0.1:8000/api/product').subscribe(data => {

      console.log("produits is coming.",this.produit = data);

    }, error => console.error(error));
    this.http.get('http://127.0.0.1:8000/api/lot').subscribe(data => {

      console.log("lots is coming.",this.lot = data);

    }, error => console.error(error));
    this.formlot =this.formBuilder.group({
      date_expiration: ['', Validators.required],
      quantite: ['', Validators.required],
      date_achat: ['', Validators.required],
      prix_vente_souhaiter: ['', Validators.required],
      priorite_de_vente: ['', Validators.required],
      produit_id: ['', Validators.required],
      prix_achat: ['', Validators.required],


    });
  }
  submit() {
     console.log(this.formlot.value);
    this.http.post('http://127.0.0.1:8000/api/lot', this.formlot.value
   ).subscribe(data => {
      console.log("lot ajoutée");

    });
  }

  getSantizeUrl(url: string) {

  }

  recuperer(id: any, nom: any, url: string, parent_id: any) {

  }

  delete(id: any) {

  }

  recupid(id: any) {

  }
}
