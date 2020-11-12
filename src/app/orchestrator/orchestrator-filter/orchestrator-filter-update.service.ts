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
