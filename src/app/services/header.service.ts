import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  title:BehaviorSubject<string> = new BehaviorSubject<string>("Dashboard");
  jobsCount:string = '';
  constructor(
    private _title: Title
  ) {
    this.title.next("Dashboard");
  }
  setTitle(title:string) {
    this.title.next(title);
    this._title.setTitle(title);
  }
}
