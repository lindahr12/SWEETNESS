import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  data: any;
  parent_id: any;
  myFile: any;

  constructor() { }

  ngOnInit() {
  }

  fileEvent($event: Event) {

  }

  onSubmit(f: NgForm) {

  }
}
