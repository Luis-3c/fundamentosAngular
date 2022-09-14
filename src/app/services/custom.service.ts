import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomService {

  private bgColor$ = new BehaviorSubject<any>({});
  selectedBgColor$ = this.bgColor$.asObservable();

  constructor() { }

  setBgColor(bgColor: any) {
    this.bgColor$.next(bgColor);
  }
}
