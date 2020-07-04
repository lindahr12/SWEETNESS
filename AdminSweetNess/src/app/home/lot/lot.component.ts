import { Component, OnInit } from '@angular/core';
import {NgxDropzoneChangeEvent} from "ngx-dropzone";
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {DomSanitizer} from "@angular/platform-browser";
import {Router} from "@angular/router";
import Swal from "sweetalert2";

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
  lotdata:any;
  produit_id: any;
  private formlot: FormGroup;
  constructor(private http: HttpClient,private formBuilder: FormBuilder,private router: Router) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'PUT, GET, POST, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': "Origin, X-Requested-With, Content-Type, Accept, Authorization",
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };
  data: any;
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



  delete(id: any) {

    console.log(id);
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: 'Vous ne pourrez pas récupérer!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, supprimez-le!',
      cancelButtonText: 'Non, garde-le'
    }).then((result) => {
      if (result.value) {
        return this.http.delete('http://127.0.0.1:8000/api/lot/' + id, this.httpOptions).subscribe(data => {
            console.log("sucess");
            Swal.fire(
              'Deleted!',
              'produit a été supprimé.',
              'success'
            )
              window.location.reload();
            //this.router.navigate["/home"];


          },
          error => {
            console.log(error);
          }
        );
      }
      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
      else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Votre produit est sécurisé :)',
          'error'
        )
      }
    })

  }


  recupid(id: any) {

    this.http.get('http://127.0.0.1:8000/api/lot/'+ id).subscribe(data => {
      console.log("lot recup.",this.lotdata = data);
      this.formlot.patchValue({
        date_expiration: this.lotdata.date_expiration,
        quantite:  this.lotdata.quantite,
        date_achat: this.lotdata.date_achat,
        prix_vente_souhaiter:  this.lotdata.prix_vente_souhaiter,
        priorite_de_vente: this.lotdata.priorite_de_vente,
        produit_id: this.lotdata.produit_id,
        prix_achat: this.lotdata.prix_achat

      })
    }, error => console.error(error));
  }

  update() {
    this.http.put('http://127.0.0.1:8000/api/lot/'+this.lotdata.id,this.formlot.value).subscribe(data => {
      console.log("lot update.",this.data=data);


    }, error => console.error(error));
  }
}
