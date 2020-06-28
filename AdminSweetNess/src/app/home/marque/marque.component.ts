import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {NgxDropzoneChangeEvent} from "ngx-dropzone";

@Component({
  selector: 'app-marque',
  templateUrl: './marque.component.html',
  styleUrls: ['./marque.component.css']
})
export class MarqueComponent implements OnInit {
  data: any;
  files: any;

  constructor() { }

  ngOnInit() {
  }

  delete(id: any) {

  }

  recuperer(id: any, nom: any, url: string, parent_id: any) {

  }

  submit(f: NgForm) {

  }

  onSelect($event: NgxDropzoneChangeEvent) {

  }

  onRemove(f: any) {

  }
}
