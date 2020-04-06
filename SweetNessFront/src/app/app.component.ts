import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SweetNessFront';
  data:any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://127.0.0.1:8000/api/get-data').subscribe(data => {

      console.log("Data is coming.",this.data = data);

      }, error => console.error(error));
  }
}
