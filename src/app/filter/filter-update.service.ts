import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Sdk } from '../sdk/sdk.model';
import { SdkService } from '../sdk/sdk.service';

@Injectable({
  providedIn: 'root'
})
export class FilterUpdateService {

  private _subject = new Subject<any>();
  private _sdkFilter: Sdk;

  constructor() { }

  private updateFilter() {
    this._subject.next(this._sdkFilter);
  }

  get events$() {
    return this._subject.asObservable();
  }

  toggleProgrammingLanguage(programmingLanguage: string) {
    console.log(this._sdkFilter);
    const index = this._sdkFilter.programmingLanguages.indexOf(programmingLanguage, 0);
    if (index >= 0) {
      this._sdkFilter.programmingLanguages.splice(index, 1);
    } else {
      this._sdkFilter.programmingLanguages.push(programmingLanguage);
    }
    this.updateFilter();
  }

  clear() {
    this._sdkFilter = {
      name: '',
      licenses: [],
      programmingLanguages: [],
      compilerInputLanguages: [],
      compilerOutputLanguages: [],
      compilerOptimizationStrategies: [],
      knowlegdeReuses: [],
      activeDevelopment: null,
      supportedQuantumCloudServices: [],
      localSimulator: null
    };
    this.updateFilter();
  }
}
