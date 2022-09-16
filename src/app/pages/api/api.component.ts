import { Component, OnInit } from '@angular/core';
import { CustomService } from 'src/app/services/custom.service';
import { SAPIService } from '../../../app/services/sapi.service';
import { Frase } from "../../modelos/frase";

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class APIComponent implements OnInit {

  public ResultApi: string = "";
  public Calculo1: number = 0;
  public Calculo2: number = 0;
  public loading: boolean = false;
  public selectedBgColor: string = "";

  constructor(public sAPIService: SAPIService, private customService: CustomService) {}



  ngOnInit(): void {
    this.HolaMundo();
    this.customService.selectedBgColor$.subscribe((value) => {
      this.selectedBgColor = value;
    });
  }


  HolaMundoCalculo(){
    let CalculoInterno: number;
   CalculoInterno = this.Calculo1 + this.Calculo2;

   alert(CalculoInterno);
  }

  HolaMundo(){
    //alert('Iniciando llamada al servicio ( entrando ala capa de servicio)');
    this.loading = true;
    this.sAPIService.HolaMundo().subscribe(res => {
      this.ResultApi = res.value;
      //alert(this.ResultApi);
      this.loading = false
    });
  }

}
