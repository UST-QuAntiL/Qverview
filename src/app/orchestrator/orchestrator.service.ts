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
    return true;
  }
}
