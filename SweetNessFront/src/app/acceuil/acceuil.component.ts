import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
data:any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://127.0.0.1:8000/get-data').subscribe(data => {
      this.data = data;
      console.log("Data is coming.");
     
      }, error => console.error(error));
  }

}
