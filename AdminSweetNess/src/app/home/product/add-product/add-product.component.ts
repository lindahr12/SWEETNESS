import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css',
  ]
})
export class AddProductComponent implements OnInit {


  private e: any;
  private spellcheck: any;

  constructor(private http: HttpClient) { }


// in app.component.ts
  files: File[] = [];
  marque: any;

  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
  submit(f: NgForm) {

    var myFormData = new FormData();
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    console.log(f.value.nom);
    console.log(f.value.parent_id);
    myFormData.append('nom',f.value.nom);
    myFormData.append('description',f.value.description);
    myFormData.append('tva',f.value.tva);
    myFormData.append('prix_ttc',f.value.prixttc);
    myFormData.append('reduction',f.value.reduction);
    myFormData.append('image', f.value.files);
    myFormData.append('marque_id', '1');
    myFormData.append('id_lot', '1');

    const endpoint = '/assets';

    this.http.post('http://127.0.0.1:8000/api/produit', myFormData, {
      headers: headers
    }).subscribe(data => {
      console.log(data);
    });

  }

  ngOnInit(): void {
  }



}
