import { SafeHtml } from '@angular/platform-browser';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, SecurityContext } from '@angular/core';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  pannier;
  userid = localStorage.getItem('user_id');

  constructor(private http: HttpClient,private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.http.get('http://127.0.0.1:8000/api/pannier/'+this.userid).subscribe(data => {
      console.log("Data is coming.", this.pannier = data);

    }, error => console.error(error));
  }
  public Parseimg(url: string) {
    var img = JSON.parse(url);
    return img;
  }

  public getSantizeUrl(imageurl: string): SafeHtml {
    return this._sanitizer.sanitize(SecurityContext.HTML, this._sanitizer.bypassSecurityTrustHtml("http://127.0.0.1:8000/img_article/" + imageurl));

  }

}
