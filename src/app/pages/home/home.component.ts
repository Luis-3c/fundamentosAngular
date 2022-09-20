import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  homeForm = new FormGroup({
    city: new FormControl('', [Validators.required, Validators.maxLength(5)]),
    country: new FormControl('', [Validators.required]),
});

  constructor(private customService: CustomService) { }

  ngOnInit(): void {
    this.customService.selectedBgColor$.subscribe((value) => {
      this.selectedBgColor = value;
    });
  }

  addClick(){
    //this.citiesList.push({city: this.city, country: this.country});
    this.citiesList.push({city: this.homeForm.get('city')?.value, country: this.homeForm.get('country')?.value});
    /* this.city = "";
    this.country = ""; */
    this.homeForm.reset();
    this.citiesList = this.citiesList.slice();
  }

  clearList(){
    this.citiesList = [];
  }

}
