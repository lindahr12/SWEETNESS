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
  fileEvent(e){
    this.filedata = e.target.files[0];
  }
  constructor(private http: HttpClient) {
  }
  ngOnInit() {
    this.http.get('http://127.0.0.1:8000/api/get-data').subscribe(data => {

      console.log("Data is coming.",this.data = data);

    }, error => console.error(error));

  }
  onSubmit(f: NgForm) {

    var myFormData = new FormData();
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    console.log(f.value.nom);
    myFormData.append('nom',f.value.nom);
    myFormData.append('parent_id','14522');
    myFormData.append('image', this.filedata);
    const endpoint = '/assets';

    this.http.post('http://127.0.0.1:8000/api/post-data', myFormData, {
      headers: headers
    }).subscribe(data => {
      console.log(data);
    });

  }


}
