import { Injectable } from '@angular/core';
import { Orchestrator } from './orchestrator.model';
// @ts-ignore
import orchestratorsJson from '../../../data/Orchestrators.json';

@Injectable({
  providedIn: 'root'
})
export class OrchestratorService {

  orchestrators: Orchestrator[] = orchestratorsJson;

  constructor() { }

  getOrchestrators(): Orchestrator[] {
    return this.orchestrators;
  }
}
