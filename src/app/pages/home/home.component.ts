import { Component, OnInit } from '@angular/core';
import { CustomService } from 'src/app/services/custom.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public city: string = "";
  public country: string = "";
  public citiesList: any[] = [];
  public selectedBgColor: string = "";

  constructor(private customService: CustomService) { }

  ngOnInit(): void {
    this.customService.selectedBgColor$.subscribe((value) => {
      this.selectedBgColor = value;
    });
  }

  addClick(){
    this.citiesList.push({city: this.city, country: this.country});
    this.city = "";
    this.country = "";
  }

  clearList(){
    this.citiesList = [];
  }

}
