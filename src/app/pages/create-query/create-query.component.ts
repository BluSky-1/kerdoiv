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
   // nanswers: new FormControl(''),
    ans1: new FormControl(''),
    ans2: new FormControl(''),
    ans3: new FormControl(''),
    ans4: new FormControl(''),
    public: new FormControl(''),
    verified: new FormControl(''),
  })

  nanswers:number = 2;

  constructor(private location: Location){

  }

  onSubmit(){

    

  }


  addFields(){
    this.nanswers++;
    console.log(this.nanswers);
  }
}
