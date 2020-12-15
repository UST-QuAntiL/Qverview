import { Injectable } from '@angular/core';
import { QuantumExecutionResource } from './quantum-execution-resource.model';
// @ts-ignore
import quantumExecutionResources from '../../../data/QuantumExecutionResources.json';

@Injectable({
  providedIn: 'root'
})
export class QuantumExecutionResourceService {

  quantumComputationResources: QuantumExecutionResource[] = quantumExecutionResources;

  constructor() { }

  getQuantumComputationResource(): QuantumExecutionResource[] {
    return this.quantumComputationResources;
  }
}
