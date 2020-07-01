import {Component, OnInit, SecurityContext} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent implements OnInit {
  private e: any;
  private spellcheck: any;
  files: File[]=[];
  marque: any;
  fournisseur_id: any;
  private produit: any;
  data: any;

  constructor(private http: HttpClient,private _sanitizer: DomSanitizer) { }
  ngOnInit(): void {
    this.http.get('http://127.0.0.1:8000/api/product').subscribe(data =>
    {
      console.log("Data is coming.",this.data = data);


    }, error => console.error(error));
  }
  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
  submit(f: NgForm) {

    var myFormData = new FormData();
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    console.log(f.value);
    console.log(this.files[0]);
    myFormData.append('nomproduit',f.value.nomproduit);
    myFormData.append('reference',f.value.reference);
    myFormData.append('description',f.value.description);
    for (let i = 0; i < 5; i++) {
      myFormData.append('image[]', this.files[i]);
    }
    myFormData.append('note', '0');
    myFormData.append('nbr_noted', '0');
    myFormData.append('is_active', '5');
    myFormData.append('fournisseur_id', '1');

    const endpoint = '/assets';
    this.http.post('http://127.0.0.1:8000/api/product', myFormData, {
      headers: headers
    }).subscribe(data => {
      
      console.log(data);
    });

  }
  public Parseimg(url : string){
    //this.sanitizer.bypassSecurityTrustUrl("C:/wamp64/www/sweetness/SWEETNESS/SweetNessBack/public/img_categorie/"+url);
    //return this.domSanitizer.sanitizer(SecurityContext.HTML,this.domSanitizer.bypassSecurityTrustHtml("C:/wamp64/www/sweetness/SWEETNESS/SweetNessBack/public/img_categorie/"+url));
    var img = JSON.parse(url);
    return img;
  }
  public getSantizeUrl(imageurl : string): SafeHtml{
    return this._sanitizer.sanitize(SecurityContext.HTML, this._sanitizer.bypassSecurityTrustHtml("http://127.0.0.1:8000/img_article/"+ imageurl));

  }





}
