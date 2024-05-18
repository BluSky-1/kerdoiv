import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-query',
  templateUrl: './create-query.component.html',
  styleUrl: './create-query.component.scss'
})
export class CreateQueryComponent {

  createQuery = new FormGroup({
    question: new FormControl(''),
    nanswers: new FormControl(''),
    public: new FormControl(''),
    verified: new FormControl(''),
  })

  constructor(private location: Location){

  }

  onSubmit(){

  }
}
