import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DomSanitizer} from "@angular/platform-browser";
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  private commande: Object;

  constructor(private http: HttpClient, private _sanitizer: DomSanitizer, private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.http.get('http://127.0.0.1:8000/api/commande').subscribe(data => {
      console.log("commande  is coming.", this.commande = data);

    }, error => console.error(error));
  }

}
