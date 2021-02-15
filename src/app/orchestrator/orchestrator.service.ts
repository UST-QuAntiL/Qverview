import { Injectable } from '@angular/core';
import { Orchestrator } from './orchestrator.model';
// @ts-ignore
import orchestratorsJson from '../../../data/Orchestrators.json';
import { OrchestratorFilterModel } from '../filter/orchestratorFilter.model';
import { QplFilterModel } from '../filter/qplFilter.model';
import { ProgrammingLanguage } from '../programming-language/programming-language.model';

@Injectable({
  providedIn: 'root'
})
export class OrchestratorService {

  orchestrators: Orchestrator[] = orchestratorsJson;

  constructor() { }

  getAllOrchestrators(): Orchestrator[] {
    return this.orchestrators;
  }

  getFilteredOrchestrators(orchestratorFilter: OrchestratorFilterModel): Orchestrator[] {
    return this.getAllOrchestrators().filter(value => this.isActive(value, orchestratorFilter));
  }

  private isActive(orchestrator: Orchestrator, filter: OrchestratorFilterModel): boolean {
    if (filter.names.length > 0 && !filter.names.includes(orchestrator.name)) {
      return false;
    }
    if (!this.supportsOneOf(filter.licenses, orchestrator.licenses)) {
      return false;
    }
    if (!this.supportsOneOf(filter.programmingLanguages, orchestrator.programmingLanguages)) {
      return false;
    }
    if (filter.activeDevelopment.length > 0 && !filter.activeDevelopment.includes(orchestrator.activeDevelopment)) {
      return false;
    }
    if (filter.productionReady.length > 0 && !filter.productionReady.includes(orchestrator.productionReady)) {
      return false;
    }
    return true;
  }

  private supportsOneOf(filter: string[], obj: string[]): boolean {
    if (filter == null || filter.length === 0) {
      return true;
    }
    for (const x of filter) {
      if (obj.includes(x)) {
        return true;
      }
    }
    return false;
  }
}
