import { Component } from '@angular/core';
import { Query } from '../../shared/models/Query';

@Component({
  selector: 'app-all-query',
  templateUrl: './all-query.component.html',
  styleUrl: './all-query.component.scss'
})
export class AllQueryComponent {

  queryObject?: Query;
  chosenQuery: any;

}
