import { Component, OnInit } from '@angular/core';
import { CustomService } from 'src/app/services/custom.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private customService: CustomService) { }

  ngOnInit(): void {
  }

  handleColorSelect(option: any){
    this.customService.setBgColor(option.value);
  }

}
