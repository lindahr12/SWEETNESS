import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  private userform: FormGroup;



  constructor(private http: HttpClient,private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit() {
    this.userform =this.formBuilder.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required],
      num_tel: ['', Validators.required],
      num_fax: ['', Validators.required],
      region: ['', Validators.required],
      rue: ['', Validators.required],
      code_postale: ['', Validators.required],
    });

  }

  adduser() {
    console.log("adddddddddddddd");
    console.log(this.userform.value)
    return this.http.post('http://127.0.0.1:8000/api/auth/signup'
      , this.userform.value).subscribe((res: Response) => {
        console.log("user");
      console.log("looooooooog");
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(['/users']);

    },error => {
        console.log(error);
    });
  }
}
