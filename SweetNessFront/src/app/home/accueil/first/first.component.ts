import { HttpClient } from '@angular/common/http';
import { Component, OnInit, SecurityContext } from '@angular/core';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";


@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
produit;
  constructor(private http: HttpClient,private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.http.get('http://127.0.0.1:8000/api/product').subscribe(data => {
      console.log("Data is coming.", this.produit = data);
    console.log("prix_vente_souhaiter" + this.produit[1].lot.prix_vente_souhaiter);

    }, error => console.error(error));
  }
  public Parseimg(url: string) {
    //this.sanitizer.bypassSecurityTrustUrl("C:/wamp64/www/sweetness/SWEETNESS/SweetNessBack/public/img_categorie/"+url);
    //return this.domSanitizer.sanitizer(SecurityContext.HTML,this.domSanitizer.bypassSecurityTrustHtml("C:/wamp64/www/sweetness/SWEETNESS/SweetNessBack/public/img_categorie/"+url));
    var img = JSON.parse(url);
    return img;
  }

  public getSantizeUrl(imageurl: string): SafeHtml {
    return this._sanitizer.sanitize(SecurityContext.HTML, this._sanitizer.bypassSecurityTrustHtml("http://127.0.0.1:8000/img_article/" + imageurl));

  }
  public addpannier(id:any) {
    console.log('id article ',id);
    let userid = localStorage.getItem('user_id');

    this.http.get('http://127.0.0.1:8000/api/pannieradd/'+id+'/'+userid).subscribe(data => {
      console.log("pannier is coming.", data);
    }, error => console.error(error));

  }
}
