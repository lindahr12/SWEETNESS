import { Component, OnInit } from '@angular/core';
import {NgxDropzoneChangeEvent} from "ngx-dropzone";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-lot',
  templateUrl: './lot.component.html',
  styleUrls: ['./lot.component.css']
})
export class LotComponent implements OnInit {
  files: any;
  data: any;

  constructor() { }

  ngOnInit() {
  }

  onSelect($event: NgxDropzoneChangeEvent) {

  }

  onRemove(f: any) {

  }

  submit(f: NgForm) {

  }

  getSantizeUrl(url: string) {

  }

  recuperer(id: any, nom: any, url: string, parent_id: any) {

  }

  delete(id: any) {

  }
}
