import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formdata: any;
  title: 'Sweetness';

  constructor() { }

  onClickSubmit(data) {
    if(this.formdata.invalid)
    {
      this.formdata.get('email').markAsTouched();
      this.formdata.get('password').markAsTouched();
    }
    else
    {
      alert("Now you are done .");
    }
  }
  ngOnInit() {
    /*Login form validation*/
    this.formdata = new FormGroup({
      email: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ])),
      password: new FormControl("", this.passwordvalidation)

    });
  }
  passwordvalidation(formcontrol) {
    if (formcontrol.value.length < 5) {
      return {"password" : true};
    }
  }


}
