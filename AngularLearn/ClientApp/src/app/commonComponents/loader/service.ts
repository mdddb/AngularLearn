import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loaderSubject = new Subject<LoaderState>();
  loaderState = this.loaderSubject.asObservable();
  constructor() { }
  show() {
    this.loaderSubject.next(<LoaderState>{ show: true });
    console.log("show");
  }
  hide() {
    //this.loaderSubject.next(<LoaderState>{ show: false });
    console.log("hide");
  }
}

export interface LoaderState {
  show: boolean;
}
