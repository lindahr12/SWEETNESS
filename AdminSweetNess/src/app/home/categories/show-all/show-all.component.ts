import {Component, OnInit, SecurityContext} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.css']
})
export class ShowAllComponent implements OnInit {
  data:any;
  images:any;
  private domSanitizer: any;
  url: any;
  constructor(private http: HttpClient,private _sanitizer: DomSanitizer) {
  }
  ngOnInit() {
    this.http.get('http://127.0.0.1:8000/api/get-data').subscribe(data => {

      console.log("Data is coming.",this.data = data);


    }, error => console.error(error));

  }
  public getSantizeUrl(url : string): SafeHtml{
     //this.sanitizer.bypassSecurityTrustUrl("C:/wamp64/www/sweetness/SWEETNESS/SweetNessBack/public/img_categorie/"+url);
    //return this.domSanitizer.sanitizer(SecurityContext.HTML,this.domSanitizer.bypassSecurityTrustHtml("C:/wamp64/www/sweetness/SWEETNESS/SweetNessBack/public/img_categorie/"+url));
      return this._sanitizer.sanitize(SecurityContext.HTML, this._sanitizer.bypassSecurityTrustHtml("http://localhost/sweetness/SWEETNESS/SweetNessBack/public/img_categorie/"+url));
    }

  delete(_id) {
     console.log(_id);
    return this.http.delete('http://127.0.0.1:8000/api/delete-data'
      , _id).subscribe(data =>{
   console.log("sucess");
    },
      error => console.log(error));
  }

  Update() {

  }
}


