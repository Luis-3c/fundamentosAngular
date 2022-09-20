import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-cities-table',
  templateUrl: './cities-table.component.html',
  styleUrls: ['./cities-table.component.css']
})
export class CitiesTableComponent implements OnInit {

  @Input() citiesList: any[] = [];

  @Output() clearList = new EventEmitter<any>();

  itemsPerPage: number = 2;
  returnedList: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    this.returnedList = this.citiesList.slice(0, this.itemsPerPage);
  }

  resetTable(){ 
    this.clearList.emit();
  }

  pageChanged(event: PageChangedEvent){
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedList =  this.citiesList.slice(startItem, endItem);
  }

}
