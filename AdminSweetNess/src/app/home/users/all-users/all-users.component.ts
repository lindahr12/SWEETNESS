import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
user:any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://127.0.0.1:8000/api/user').subscribe(data => {
      console.log("Data is coming.", this.user = data);

    }, error => console.error(error));
  }
  /**Delete user */
  

}
