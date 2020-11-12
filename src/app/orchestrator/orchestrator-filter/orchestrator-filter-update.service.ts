import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Orchestrator } from '../orchestrator.model';

@Injectable({
  providedIn: 'root'
})
export class OrchestratorFilterUpdateService {

  private subject = new Subject<any>();
  private orchestratorFilter: Orchestrator;

  constructor() { }

  static isActive(orchestrator: Orchestrator, orchestratorFilter: Orchestrator): boolean {
    let result = true;
    for (const x of orchestratorFilter.licenses) {
      if (!orchestrator.licenses.includes(x)) {
        result = false;
      }
    }
    for (const x of orchestratorFilter.programmingLanguages) {
      if (!orchestrator.programmingLanguages.includes(x)) {
        result = false;
      }
    }
    if (result && orchestratorFilter.activeDevelopment != null &&
        orchestratorFilter.activeDevelopment !== orchestratorFilter.activeDevelopment) {
      result = false;
    }
    if (result && orchestratorFilter.productionReady != null &&
      orchestratorFilter.productionReady !== orchestratorFilter.productionReady) {
      result = false;
    }
    return result;
  }

  private updateFilter(): void {
    this.subject.next(this.orchestratorFilter);
  }

  get event$(): Observable<any> {
    return this.subject.asObservable();
  }

  toggleLicense(license: string): void {
    const index = this.orchestratorFilter.licenses.indexOf(license, 0);
    if (index >= 0) {
      this.orchestratorFilter.licenses.splice(index, 1);
    } else {
      this.orchestratorFilter.licenses.push(license);
    }
    this.updateFilter();
  }

  toggleProgrammingLanguage(programmingLanguage: string): void {
    const index = this.orchestratorFilter.programmingLanguages.indexOf(programmingLanguage, 0);
    if (index >= 0) {
      this.orchestratorFilter.programmingLanguages.splice(index, 1);
    } else {
      this.orchestratorFilter.programmingLanguages.push(programmingLanguage);
    }
    this.updateFilter();
  }

  toggleActiveDevelopment(activeDevelopment: boolean): void {
    if (this.orchestratorFilter.activeDevelopment == null) {
      this.orchestratorFilter.activeDevelopment = activeDevelopment;
    } else {
      this.orchestratorFilter.activeDevelopment = null;
    }
    this.updateFilter();
  }

  toggleProductionReady(activeDevelopment: boolean): void {
    if (this.orchestratorFilter.productionReady == null) {
      this.orchestratorFilter.productionReady = activeDevelopment;
    } else {
      this.orchestratorFilter.productionReady = null;
    }
    this.updateFilter();
  }

  clear(): void {
    this.orchestratorFilter = {
      name: '',
      licenses: [],
      programmingLanguages: [],
      activeDevelopment: null,
      productionReady: null
    };
    this.updateFilter();
  }
}
