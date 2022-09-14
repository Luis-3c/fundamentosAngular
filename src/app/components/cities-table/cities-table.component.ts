import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cities-table',
  templateUrl: './cities-table.component.html',
  styleUrls: ['./cities-table.component.css']
})
export class CitiesTableComponent implements OnInit {

  @Input() citiesList: any[] = [];

  @Output() clearList = new EventEmitter<any>();;

  constructor() { }

  ngOnInit(): void {
  }

  resetTable(){ 
    this.clearList.emit();
  }

}
