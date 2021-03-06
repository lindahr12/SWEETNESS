import {Component, OnInit, SecurityContext} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import Swal from 'sweetalert2';
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {Router} from "@angular/router";


@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.css']
})
export class ShowAllComponent implements OnInit {

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
  private categorie: Object;
  private produitdetails: Object;

  constructor(private http: HttpClient, private _sanitizer: DomSanitizer, private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {

    this.http.get('http://127.0.0.1:8000/api/categorie').subscribe(data => {
      console.log("categorie is coming.",this.categorie= data);

    }, error => console.error(error));
    this.http.get('http://127.0.0.1:8000/api/product').subscribe(data => {
      console.log("product is coming.", this.produit = data);

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

  public localFields: Object = {text: 'nom',value:'id'};
  // set the placeholder to MultiSelect Dropdown input element
  public localWaterMark: string = 'Select produits';
  value: any;
  parent_id: any;
  produitsid :any;
  submit(f: NgForm) {
      var myFormData = new FormData();
      const headers = new HttpHeaders();
      console.log("produits selectionée "+f.value.value);
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');
      console.log('nom'+f.value.nom);
      console.log("parent_id"+f.value.parent_id);
      myFormData.append('nom', f.value.nom);
      if (f.value.parent_id) {
        myFormData.append('parent_id', f.value.parent_id);
      }
      myFormData.append('image', this.files[0]);

    // this.http.get('http://127.0.0.1:8000/api/productnom/'+f.value.value).subscribe(data => {
    //   console.log("product search  is coming.", this.produitdetails = data);
    //
    // }, error => console.error(error))
      console.log('produit_id',f.value.value);

    for (let i = 0; i < f.value.value.length; i++) {
      myFormData.append('produit_id[]', JSON.stringify(f.value.value[i]));
      console.log(f.value.value[i]);
    }
      const endpoint = '/assets';
      this.http.post('http://127.0.0.1:8000/api/categorie', myFormData, {
        headers: headers
      }).subscribe(data => {
        console.log(data)
       window.location.reload();
      });

    }

  public Parseimg(url: string) {
    //this.sanitizer.bypassSecurityTrustUrl("C:/wamp64/www/sweetness/SWEETNESS/SweetNessBack/public/img_categorie/"+url);
    //return this.domSanitizer.sanitizer(SecurityContext.HTML,this.domSanitizer.bypassSecurityTrustHtml("C:/wamp64/www/sweetness/SWEETNESS/SweetNessBack/public/img_categorie/"+url));
    var img = JSON.parse(url);
    return img;
  }

  public getSantizeUrl(imageurl: string): SafeHtml {
    return this._sanitizer.sanitize(SecurityContext.HTML, this._sanitizer.bypassSecurityTrustHtml("http://127.0.0.1:8000/img_categorie/" + imageurl));

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

        return this.http.delete('http://127.0.0.1:8000/api/categorie/'+id, this.httpOptions).subscribe(data => {
            console.log(data);
            Swal.fire(
              'Deleted!',
              'marque a été supprimé.',
              'success'
            )
            window.location.reload();
            //this.router.navigate["/home"];

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


  recupid(id: any) {

    this.http.get('http://127.0.0.1:8000/api/productid/' + id).subscribe(data => {
      console.log("marque is coming.", this.produit = data);


    }, error => console.error(error));
  }

  update() {

    var myFormData = new FormData();
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    console.log(this.formupdate.value);
    console.log(this.files[0]);
    myFormData.append('nomproduit', this.formupdate.value.nomproduit);
    myFormData.append('reference', this.formupdate.value.reference);
    myFormData.append('description', this.formupdate.value.description);
    for (let i = 0; i < 5; i++) {
      myFormData.append('image[]', this.files[i]);
    }
    myFormData.append('note', '0');
    myFormData.append('nbr_noted', '0');
    myFormData.append('is_active', '5');
    myFormData.append('fournisseur_id', '1');

    const endpoint = '/assets';
    this.http.put('http://127.0.0.1:8000/api/product', myFormData, {
      headers: headers
    }).subscribe(data => {

      console.log(data);
      this.router.navigate["/home/product"];

    });
  }


}


