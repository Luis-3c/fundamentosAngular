import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ConfigService } from '../services/Config/config.service';
import { Frase } from "../modelos/frase";

@Injectable({
  providedIn: 'root'
})
export class SAPIService {

  constructor(private http: HttpClient) { }

  private frase: Frase = { value: "", icon_url: "", id: "", url: "" };
  private ChuckUrl = "https://api.chucknorris.io/jokes/random"; // URL to web api // URL to web api

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
  };

  HolaMundo(){
    return this.http.get<Frase>(this.ChuckUrl);
  }
}
