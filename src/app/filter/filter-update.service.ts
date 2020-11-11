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

  toggleLicense(license: string) {
    const index = this._sdkFilter.licenses.indexOf(license, 0);
    if (index >= 0) {
      this._sdkFilter.licenses.splice(index, 1);
    } else {
      this._sdkFilter.licenses.push(license);
    }
    this.updateFilter();
  }

  toggleProgrammingLanguage(programmingLanguage: string) {
    const index = this._sdkFilter.programmingLanguages.indexOf(programmingLanguage, 0);
    if (index >= 0) {
      this._sdkFilter.programmingLanguages.splice(index, 1);
    } else {
      this._sdkFilter.programmingLanguages.push(programmingLanguage);
    }
    this.updateFilter();
  }

  toggleCompilerInputLanguage(compilerInputLanguage: string) {
    const index = this._sdkFilter.compilerInputLanguages.indexOf(compilerInputLanguage, 0);
    if (index >= 0) {
      this._sdkFilter.compilerInputLanguages.splice(index, 1);
    } else {
      this._sdkFilter.compilerInputLanguages.push(compilerInputLanguage);
    }
    this.updateFilter();
  }

  toggleCompilerOutputLanguage(compilerOutputLanguage: string) {
    const index = this._sdkFilter.compilerOutputLanguages.indexOf(compilerOutputLanguage, 0);
    if (index >= 0) {
      this._sdkFilter.compilerOutputLanguages.splice(index, 1);
    } else {
      this._sdkFilter.compilerOutputLanguages.push(compilerOutputLanguage);
    }
    this.updateFilter();
  }

  toggleCompilerOptimizationStrategy(compilerOptimizationStrategy: string) {
    const index = this._sdkFilter.compilerOptimizationStrategies.indexOf(compilerOptimizationStrategy, 0);
    if (index >= 0) {
      this._sdkFilter.compilerOptimizationStrategies.splice(index, 1);
    } else {
      this._sdkFilter.compilerOptimizationStrategies.push(compilerOptimizationStrategy);
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