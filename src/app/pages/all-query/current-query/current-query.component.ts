import { Component, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Query } from '../../../shared/models/Query';

@Component({
  selector: 'app-current-query',
  templateUrl: './current-query.component.html',
  styleUrl: './current-query.component.scss'
})
export class CurrentQueryComponent {

  @Output() queryInput?:Query;

  answersForm = new FormGroup({
  ans1 : new FormControl(''),
  ans2 : new FormControl(''),
  ans3 : new FormControl(''),
  ans4 : new FormControl(''),
});

answer() {


}

}
