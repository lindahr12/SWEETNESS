import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items=[];
  images = [];
  formgrp:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.formgrp = this.fb.group({
      nom:[''],
      prix:[''],
      quantite:[''],
      file:['']

    });
  }
  onsubmit(){
    this.items.push(this.formgrp.value);
    console.log(this.items);
  }
  delete($id){
    this.items.splice($id,1);
  }
  onFileChange(event) {
    if (event.target.files && event.target.files[0]) {
        var filesAmount = event.target.files.length;
        for (let i = 0; i < filesAmount; i++) {
                var reader = new FileReader();

                reader.onload = (event:any) => {
                  console.log(event.target.result);
                   this.images.push(event.target.result);

                   this.formgrp.patchValue({
                      file: this.images
                   });
                }

                reader.readAsDataURL(event.target.files[i]);
        }
    }
  }

}
