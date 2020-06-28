import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent implements OnInit {
  private e: any;
  private spellcheck: any;

  constructor(private http: HttpClient) { }

  files: File[] = [];
  marque: any;
  data: any;
  fournisseur_id: any;

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
    console.log(f.value);
    console.log(this.files);
    myFormData.append('nomproduit',f.value.nomproduit);
    myFormData.append('reference',f.value.reference);
    myFormData.append('description',f.value.description);
    myFormData.append('image', 'this.files');
    myFormData.append('note', '0');
    myFormData.append('nbr_noted', '0');
    myFormData.append('is_active', '5');
    myFormData.append('fournisseur_id', '1');
    const endpoint = '/assets';
    this.http.post('http://127.0.0.1:8000/api/product', myFormData, {
      headers: headers
    }).subscribe(data => {
      console.log(data);
    });

  }

  ngOnInit(): void {
  }


}
