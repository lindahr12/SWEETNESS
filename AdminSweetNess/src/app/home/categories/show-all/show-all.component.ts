import {Component, OnInit, SecurityContext} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import Swal from 'sweetalert2';
import {FormBuilder, Validators} from "@angular/forms";

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
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods': 'PUT, GET, POST, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': "Origin, X-Requested-With, Content-Type, Accept, Authorization",
      'Content-Type':'application/json',
      'Accept':'application/json'
    })
  };
  private Categorieup: any;
  private parent_id: any;
  private categorie: Object;
  constructor(private http: HttpClient,private _sanitizer: DomSanitizer,private formBuilder: FormBuilder) {
  }
  ngOnInit() {
   this.getall_categorie();
    this.categorieedit=this.formBuilder.group({
      nom: ['', Validators.required],
      image: ['', Validators.required],
      parent_id:['', ]

    });
  }
  public getall_categorie()
  {
    this.http.get('http://127.0.0.1:8000/api/categorie').subscribe(data => {

      console.log("Data is coming.",this.data = data);


    }, error => console.error(error));
  }
  public getSantizeUrl(url : string): SafeHtml{
     //this.sanitizer.bypassSecurityTrustUrl("C:/wamp64/www/sweetness/SWEETNESS/SweetNessBack/public/img_categorie/"+url);
    //return this.domSanitizer.sanitizer(SecurityContext.HTML,this.domSanitizer.bypassSecurityTrustHtml("C:/wamp64/www/sweetness/SWEETNESS/SweetNessBack/public/img_categorie/"+url));
      return this._sanitizer.sanitize(SecurityContext.HTML, this._sanitizer.bypassSecurityTrustHtml("http://localhost/sweetness/SWEETNESS/SweetNessBack/public/img_categorie/"+url));
    }
 _id: any;
  private browserRefresh: boolean;
  categorieedit: any;

  submitted: any;
  delete(_id) {
    console.log(_id);
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: 'Vous ne pourrez pas récupérer!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, supprimez-le!',
      cancelButtonText: 'Non, garde-le'
    }).then((result) => {
      if (result.value) {
        return this.http.delete('http://127.0.0.1:8000/api/delete-categorie/' + _id, this.httpOptions).subscribe(data => {
            console.log("sucess");
            Swal.fire(
              'Deleted!',
              'le catégorie a été supprimé.',
              'success'
            )
          this.getall_categorie();
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
          'Votre catégorie est sécurisé :)',
          'error'
        )
      }
    })

  }


  Update() {

  }
  get E() {

    return this.categorieedit.controls;
  }
   search(parent_id)
   {
     this.http.get('http://127.0.0.1:8000/api/search'+parent_id).subscribe(res => {

       console.log("Data is coming.",this.categorie= res);


     }, error => console.error(error));
   }
  recuperer(_id: any, nom: any, image: any, parent_id: any) {
    console.log('updateeeeeeeeeeeeee')
    this._id= _id;


    console.log(this.parent_id);
    this.categorieedit.get("nom").setValue(nom);
    this.categorieedit.get("image").setValue(image);
    if(parent_id){
      console.log(this.parent_id);
    this.categorieedit.get("parent_id").setValue(parent_id);}
  }

  edit() {

  }
}


