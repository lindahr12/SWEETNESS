import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {filter, map} from "rxjs/operators";
import {  NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods': 'PUT, GET, POST, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': "Origin, X-Requested-With, Content-Type, Accept, Authorization",
      'Content-Type':'application/json',
      'Accept':'application/json'
    })
  };
  title: any;
  private activatedRoute: any;
  constructor(private formbuilder: FormBuilder, private http: HttpClient,private router: Router) { }

  ngOnInit() {


  }

  logout() {
    localStorage.removeItem('token');
    localStorage.clear();
    return this.http.post('http://127.0.0.1:8000/api/auth/logout', this.router.navigate(['/login']))
      .subscribe((res: Response) => {

        // console.log(res.token);

   console.log("loooooooogout");
        this.router.navigate(['/login']);
      },
      (error) => {
        localStorage.removeItem('token');

      }
    );
  }


}
