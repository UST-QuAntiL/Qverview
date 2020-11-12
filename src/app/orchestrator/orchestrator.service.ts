import { Injectable } from '@angular/core';
import { Orchestrator } from './orchestrator.model';

@Injectable({
  providedIn: 'root'
})
export class OrchestratorService {

  orchestrators: Orchestrator[] = [
    {
      name: 'Orquestra',
      licenses: ['Closed Source'],
      programmingLanguages: ['Orquestra YAML'],
      activeDevelopment: true,
      productionReady: true
    },
    {
      name: 'Test',
      licenses: ['Apache 2.0'],
      programmingLanguages: ['Custom YAML'],
      activeDevelopment: false,
      productionReady: false
    }
  ];

  constructor() { }

  getOrchestrators(): Orchestrator[] {
    return this.orchestrators;
  }
}
