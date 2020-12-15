import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Sdk } from '../sdk.model';
import { QuantumCloudService } from '../../quantum-cloud-service/quantum-cloud-service.model';

@Injectable({
  providedIn: 'root'
})
export class SdkFilterUpdateService {

  private subject = new Subject<Sdk>();
  private sdkFilter: Sdk;

  constructor() {}

  static isActive(sdk: Sdk, sdkFilter: Sdk): boolean {
    let result = true;
    for (const x of sdkFilter.licenses) {
      if (!sdk.licenses.includes(x)) {
        result = false;
      }
    }
    for (const x of sdkFilter.programmingLanguages) {
      if (!sdk.programmingLanguages.includes(x)) {
        result = false;
      }
    }
    for (const x of sdkFilter.compilerInputLanguages) {
      if (!sdk.compilerInputLanguages.includes(x)) {
        result = false;
      }
    }
    for (const x of sdkFilter.compilerOutputLanguages) {
      if (!sdk.compilerOutputLanguages.includes(x)) {
        result = false;
      }
    }
    for (const x of sdkFilter.compilerOptimizationStrategies) {
      if (!sdk.compilerOptimizationStrategies.includes(x)) {
        result = false;
      }
    }
    for (const x of sdkFilter.knowledgeReuses) {
      if (!sdk.knowledgeReuses.includes(x)) {
        result = false;
      }
    }
    if (result && sdkFilter.activeDevelopment != null &&
      sdkFilter.activeDevelopment !== sdk.activeDevelopment) {
      result = false;
    }
    for (const x of sdkFilter.supportedQuantumCloudServices) {
      if (!sdk.supportedQuantumCloudServices.includes(x)) {
        result = false;
      }
    }
    if (result && sdkFilter.localSimulator != null &&
      sdkFilter.localSimulator !== sdk.localSimulator) {
      result = false;
    }
    return result;
  }

  private updateFilter(): void {
    this.subject.next(this.sdkFilter);
  }

  get events$(): Observable<Sdk> {
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
    if (this.sdkFilter.supportedQuantumCloudServices.includes(supportedQuantumCloudService)) {
      this.sdkFilter.supportedQuantumCloudServices.pop();
    } else {
      if (this.sdkFilter.supportedQuantumCloudServices.length > 0) {
        this.sdkFilter.supportedQuantumCloudServices.pop();
      }
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
