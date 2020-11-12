import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Sdk } from '../sdk.model';

@Injectable({
  providedIn: 'root'
})
export class SdkFilterUpdateService {

  private subject = new Subject<any>();
  private sdkFilter: Sdk;

  constructor() { }

  private updateFilter(): void {
    this.subject.next(this.sdkFilter);
  }

  get events$(): Observable<any> {
    return this.subject.asObservable();
  }

  toggleLicense(license: string): void {
    const index = this.sdkFilter.licenses.indexOf(license, 0);
    if (index >= 0) {
      this.sdkFilter.licenses.splice(index, 1);
    } else {
      this.sdkFilter.licenses.push(license);
    }
    this.updateFilter();
  }

  toggleProgrammingLanguage(programmingLanguage: string): void {
    const index = this.sdkFilter.programmingLanguages.indexOf(programmingLanguage, 0);
    if (index >= 0) {
      this.sdkFilter.programmingLanguages.splice(index, 1);
    } else {
      this.sdkFilter.programmingLanguages.push(programmingLanguage);
    }
    this.updateFilter();
  }

  toggleCompilerInputLanguage(compilerInputLanguage: string): void {
    const index = this.sdkFilter.compilerInputLanguages.indexOf(compilerInputLanguage, 0);
    if (index >= 0) {
      this.sdkFilter.compilerInputLanguages.splice(index, 1);
    } else {
      this.sdkFilter.compilerInputLanguages.push(compilerInputLanguage);
    }
    this.updateFilter();
  }

  toggleCompilerOutputLanguage(compilerOutputLanguage: string): void {
    const index = this.sdkFilter.compilerOutputLanguages.indexOf(compilerOutputLanguage, 0);
    if (index >= 0) {
      this.sdkFilter.compilerOutputLanguages.splice(index, 1);
    } else {
      this.sdkFilter.compilerOutputLanguages.push(compilerOutputLanguage);
    }
    this.updateFilter();
  }

  toggleCompilerOptimizationStrategy(compilerOptimizationStrategy: string): void {
    const index = this.sdkFilter.compilerOptimizationStrategies.indexOf(compilerOptimizationStrategy, 0);
    if (index >= 0) {
      this.sdkFilter.compilerOptimizationStrategies.splice(index, 1);
    } else {
      this.sdkFilter.compilerOptimizationStrategies.push(compilerOptimizationStrategy);
    }
    this.updateFilter();
  }

  toggleKnowledgeReuse(knowledgeReuse: string): void {
    const index = this.sdkFilter.knowledgeReuses.indexOf(knowledgeReuse, 0);
    if (index >= 0) {
      this.sdkFilter.knowledgeReuses.splice(index, 1);
    } else {
      this.sdkFilter.knowledgeReuses.push(knowledgeReuse);
    }
    this.updateFilter();
  }

  toggleActiveDevelopment(activeDevelopment: boolean): void {
    if (this.sdkFilter.activeDevelopment == null) {
      this.sdkFilter.activeDevelopment = activeDevelopment;
    } else {
      this.sdkFilter.activeDevelopment = null;
    }
    this.updateFilter();
  }

  toggleSupportedQuantumCloudServices(supportedQuantumCloudService: string): void {
    const index = this.sdkFilter.supportedQuantumCloudServices.indexOf(supportedQuantumCloudService, 0);
    if (index >= 0) {
      this.sdkFilter.supportedQuantumCloudServices.splice(index, 1);
    } else {
      this.sdkFilter.supportedQuantumCloudServices.push(supportedQuantumCloudService);
    }
    this.updateFilter();
  }

  toggleLocalSimulator(localSimulator: boolean): void {
    if (this.sdkFilter.localSimulator == null) {
      this.sdkFilter.localSimulator = localSimulator;
    } else {
      this.sdkFilter.localSimulator = null;
    }
    this.updateFilter();
  }

  clear(): void {
    this.sdkFilter = {
      name: '',
      licenses: [],
      programmingLanguages: [],
      compilerInputLanguages: [],
      compilerOutputLanguages: [],
      compilerOptimizationStrategies: [],
      knowledgeReuses: [],
      activeDevelopment: null,
      supportedQuantumCloudServices: [],
      localSimulator: null
    };
    this.updateFilter();
  }
}
