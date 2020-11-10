import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterUpdateService {

  private _subject = new Subject<any>();

  constructor() { }

  updateFilter(value) {
    this._subject.next(value);
  }

  get events$() {
    return this._subject.asObservable();
  }
}
