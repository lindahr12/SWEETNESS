import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit
{
  constructor(private router: Router){

  }
  ngOnInit(): void {
    if (localStorage.getItem('token') == null){
      {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Quelque chose a mal tourné!',
          footer: '<a href>Veuillez vous connecter</a>'
        })

        this.router.navigate(['/']);


      }}
  }





}
