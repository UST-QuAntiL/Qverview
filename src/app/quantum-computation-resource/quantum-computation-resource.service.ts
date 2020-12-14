import { Injectable } from '@angular/core';
import { QuantumComputationResource } from './quantum-computation-resource.model';
// @ts-ignore
import executionResources from '../../../data/ExecutionResources.json';

@Injectable({
  providedIn: 'root'
})
export class QuantumComputationResourceService {

  quantumComputationResources: QuantumComputationResource[] = executionResources;

  constructor() { }

  getQuantumComputationResource(): QuantumComputationResource[] {
    return this.quantumComputationResources;
  }
}
