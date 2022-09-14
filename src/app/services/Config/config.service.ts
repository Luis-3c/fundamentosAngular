import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

    public static API_ENDPOINT(): string {
      return 'https://localhost:44362/';
    }
}
