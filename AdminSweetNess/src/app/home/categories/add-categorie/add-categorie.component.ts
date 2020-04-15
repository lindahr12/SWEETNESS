import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {NgForm, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css']
})
export class AddCategorieComponent implements OnInit {

  title = 'angularlaraveluploadimage';
  filedata:any;
  myFile: any;
  private data: Object;
  parent_id: any;
  private categorie: Object;
  private i: any;
  fileEvent(e){
    this.filedata = e.target.files[0];
  }
  constructor(private http: HttpClient) {
  }
  ngOnInit() {
    this.http.get('http://127.0.0.1:8000/api/categorie').subscribe(data => {

      console.log("Data is coming.",this.data = data);

    }, error => console.error(error));

  }


  onSubmit(f: NgForm) {

    var myFormData = new FormData();
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    console.log(f.value.nom);
    console.log(f.value.parent_id);
    myFormData.append('nom',f.value.nom);
    if(f.value.parent_id) {
      myFormData.append('parent_id', f.value.parent_id);
    }
    myFormData.append('image', this.filedata);
    const endpoint = '/assets';

    this.http.post('http://127.0.0.1:8000/api/categorie', myFormData, {
      headers: headers
    }).subscribe(data => {
      console.log(data);
    });

  }


}
