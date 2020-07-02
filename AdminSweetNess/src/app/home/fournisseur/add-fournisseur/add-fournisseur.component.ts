import { HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-fournisseur',
  templateUrl: './add-fournisseur.component.html',
  styleUrls: ['./add-fournisseur.component.css']
})
export class AddFournisseurComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {

    var myFormData = new FormData();
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    myFormData.append('nom', f.value.nom);

    myFormData.append('description', f.value.description);
    myFormData.append('rue ', f.value.rue);
    myFormData.append('region', f.value.region);
    myFormData.append('num_tel', f.value.num_tel);
    myFormData.append('num_fax', f.value.num_fax);
    myFormData.append('matricule_fiscale', f.value.matricule_fiscale);
    myFormData.append('email', f.value.email);
    if (f.value.is_active) {
      myFormData.append('is_active', '1');
    } else {
      myFormData.append('is_active', '0');
    }
    const endpoint = '/assets';
    this.http.post('http://127.0.0.1:8000/api/fournisseur', myFormData, {
      headers: headers
    }).subscribe(data => {
      console.log(data);

    });

  }
}


