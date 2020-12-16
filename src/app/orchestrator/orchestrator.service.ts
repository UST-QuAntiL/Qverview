import { Injectable } from '@angular/core';
import { Orchestrator } from './orchestrator.model';
// @ts-ignore
import orchestratorsJson from '../../../data/Orchestrators.json';
import { FilterService } from '../filter/filter.service';

@Injectable({
  providedIn: 'root'
})
export class OrchestratorService {

  orchestrators: Orchestrator[] = orchestratorsJson;

  constructor(private filterService: FilterService) { }

  getAllOrchestrators(): Orchestrator[] {
    return this.orchestrators;
  }

  getActiveOrchestrators(): Orchestrator[] {
    const result: Orchestrator[] = [];
    for (const x of this.getAllOrchestrators()) {
      if (this.isActive(x)) {
        result.push(x);
      }
    }
    return result;
  }

  isActive(orchestrator: Orchestrator): boolean {
    const filter = this.filterService.getActiveFilter();
    let result = true;
    if (filter.orchestrator !== '' && filter.orchestrator !== orchestrator.name) {
      result = false;
    }
    if (filter.license !== '' && !orchestrator.licenses.includes(filter.license)) {
      result = false;
    }
    if (filter.programmingLanguage !== '' && !orchestrator.programmingLanguages.includes(filter.programmingLanguage)) {
      result = false;
    }
    if (filter.activeDevelopment !== '' && filter.activeDevelopment !== orchestrator.activeDevelopment) {
      result = false;
    }
    if (filter.productionReady !== '' && filter.productionReady !== orchestrator.productionReady) {
      result = false;
    }
    return result;
  }
}
