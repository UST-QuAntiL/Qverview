import { Injectable } from '@angular/core';
import { Orchestrator } from './orchestrator.model';

@Injectable({
  providedIn: 'root'
})
export class OrchestratorService {

  orchestrators: Orchestrator[] = [{
    name: 'Orquestra',
    licenses: ['Closed Source'],
    programmingLanguages: ['Orquestra YAML'],
    activeDevelopment: true,
    productionReady: true
  }];

  constructor() { }

  getOrchestrators(): Orchestrator[] {
    return this.orchestrators;
  }
}
