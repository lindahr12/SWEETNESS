import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
myform:FormGroup
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.myform = this.fb.group({
      search:'',
      categorie:''
    });
  }
  update(){
    console.log(this.myform.value);
  }

}
