import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  data: any;
  parent_id: any;
  myFile: any;


  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('http://127.0.0.1:8000/api/marque').subscribe(data => {

      console.log("Data is coming.",this.data = data);

    }, error => console.error(error));
    this.http.get('http://127.0.0.1:8000/api/').subscribe(data => {

      console.log("Data is coming.",this.data = data);

    }, error => console.error(error));
  }

  fileEvent($event: Event) {

  }

  onSubmit(f: NgForm) {

  }

}
