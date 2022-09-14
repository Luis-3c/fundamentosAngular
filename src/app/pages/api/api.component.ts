import { Component, OnInit } from '@angular/core';
import { SAPIService } from '../../../app/services/sapi.service';
import { Frase } from "../../modelos/frase";

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class APIComponent implements OnInit {

  public ResultApi: string = "";

  constructor(public sAPIService: SAPIService) {}



  ngOnInit(): void {
    this.HolaMundo();
  }

  HolaMundo(){
    alert('Iniciando llamada al servicio ( entrando ala capa de servicio)');
    this.sAPIService.HolaMundo().subscribe(res => {
      this.ResultApi = res.url;
      alert(this.ResultApi);
    });
  }

}
