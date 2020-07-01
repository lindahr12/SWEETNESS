import {Component, OnInit, SecurityContext} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import Swal from "sweetalert2";

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent implements OnInit {
  private e: any;
  private spellcheck: any;
  files: File[] = [];
  marque: any;
  fournisseur_id: any;
  private produit: any;
  data: any;

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'PUT, GET, POST, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': "Origin, X-Requested-With, Content-Type, Accept, Authorization",
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };
  formupdate: FormGroup;

  constructor(private http: HttpClient, private _sanitizer: DomSanitizer,private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {

    this.http.get('http://127.0.0.1:8000/api/product').subscribe(data => {
      console.log("Data is coming.", this.data = data);


    }, error => console.error(error));
    this.formupdate=this.formBuilder.group({
      nom: ['', Validators.required],
      reference: ['', Validators.required],
      description:['', ],
      fournisseur_id:['', ]

    });
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
    myFormData.append('nomproduit', f.value.nomproduit);
    myFormData.append('reference', f.value.reference);
    myFormData.append('description', f.value.description);
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

  public Parseimg(url: string) {
    //this.sanitizer.bypassSecurityTrustUrl("C:/wamp64/www/sweetness/SWEETNESS/SweetNessBack/public/img_categorie/"+url);
    //return this.domSanitizer.sanitizer(SecurityContext.HTML,this.domSanitizer.bypassSecurityTrustHtml("C:/wamp64/www/sweetness/SWEETNESS/SweetNessBack/public/img_categorie/"+url));
    var img = JSON.parse(url);
    return img;
  }

  public getSantizeUrl(imageurl: string): SafeHtml {
    return this._sanitizer.sanitize(SecurityContext.HTML, this._sanitizer.bypassSecurityTrustHtml("http://127.0.0.1:8000/img_article/" + imageurl));

  }

  delete(id: any) {

    console.log(id);
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: 'Vous ne pourrez pas récupérer!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, supprimez-le!',
      cancelButtonText: 'Non, garde-le'
    }).then((result) => {
      if (result.value) {
        return this.http.delete('http://127.0.0.1:8000/api/product/' + id, this.httpOptions).subscribe(data => {
            console.log("sucess");
            Swal.fire(
              'Deleted!',
              'produit a été supprimé.',
              'success'
            )
            window.location.reload();
          },
          error => {
            console.log(error);
          }
        );
      }
      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
      else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Votre produit est sécurisé :)',
          'error'
        )
      }
    })

  }

  update(f: NgForm) {

  }

  recupid(id: any) {

    this.http.get('http://127.0.0.1:8000/api/productid/'+ id).subscribe(data => {
      console.log("produittttttttttttt is coming.", this.produit = data);


    }, error => console.error(error));
  }
}
