import { Component, EventEmitter, Input, Output } from '@angular/core';
import { QueryService } from '../../../shared/services/query.service';
import { Query } from '../../../shared/models/Query';

@Component({
  selector: 'app-query-picker',
  templateUrl: './query-picker.component.html',
  styleUrl: './query-picker.component.scss'
})
export class QueryPickerComponent {

  @Input() queryInput?: Query;
  @Input() queryObjectInput?: Array<any>;
  @Output() queryObjectEmitter: EventEmitter<any> = new EventEmitter();
  chosenQuery: any;

  constructor(private queryService:QueryService){

  }

  ngOnChanges(){
    if(this.queryInput?.id){
      this.queryService.getById
    }
  }

  ngOnInit(){
    if (this.queryObjectInput) {
      this.chosenQuery = this.queryObjectInput[0];
      this.reload();
    }
  }

  
  reload() {
    this.queryObjectEmitter.emit(this.chosenQuery);
  }

}
