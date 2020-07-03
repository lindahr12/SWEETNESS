import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import Swal from "sweetalert2";


@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {
  private formfour: FormGroup;

  
  fournisseur:any;
  fournisseurupdated:any;

  constructor(private http: HttpClient,private formBuilder: FormBuilder) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };
  ngOnInit() {
    /**Form Group store */
    this.formfour =this.formBuilder.group({
      nom: ['', Validators.required],
      description: ['', Validators.required],
      rue: ['', Validators.required],
      region: ['', Validators.required],
      num_tel: ['', Validators.required],
      num_fax: ['', Validators.required],
      email: ['', Validators.required],
      num_tel: ['', Validators.required],
      num_fax: ['', Validators.required],
      matricule_fiscale: ['', Validators.required],
      is_active: ['', Validators.required],
    });

/**get all fournisseur */
    this.http.get('http://127.0.0.1:8000/api/fournisseur').subscribe(data => {

      console.log("fournisseurs is coming.",this.fournisseur = data);

    }, error => console.error(error))

  }
  /**submitt */
  submit() {
    console.log(this.formfour.value);
   this.http.post('http://127.0.0.1:8000/api/fournisseur', this.formfour.value
  ).subscribe(data => {
     console.log("four ajoutée");
     window.location.reload();


   });
 }
 /**delete */
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
      return this.http.delete('http://127.0.0.1:8000/api/fournisseur/' + id, this.httpOptions).subscribe(data => {
          console.log("sucess");
          Swal.fire(
            'Deleted!',
            'produit a été supprimé.',
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

recuperer(id: any) {

  this.http.get('http://127.0.0.1:8000/api/fournisseur/'+id).subscribe(data => {

    console.log("fournisseur recuperer.",this.fournisseurupdated = data);
    this.formfour.patchValue({
      nom: this.fournisseurupdated.nom,
      description: this.fournisseurupdated.description,
      rue: this.fournisseurupdated.rue,
      region: this.fournisseurupdated.region,
      num_tel: this.fournisseurupdated.num_tel,
      num_fax: this.fournisseurupdated.num_fax,
      email: this.fournisseurupdated.email,
      matricule_fiscale:this.fournisseurupdated.matricule_fiscale,
      is_active: this.fournisseurupdated.is_active,
    });

  }, error => console.error(error))
  console.log(this.fournisseurupdated);
}
/**submitt */
update() {
  console.log(this.formfour.value);
 this.http.put('http://127.0.0.1:8000/api/fournisseur/'+this.fournisseurupdated.id, this.formfour.value
).subscribe(data => {
   console.log("four updated");
   window.location.reload();


 });
}

}
