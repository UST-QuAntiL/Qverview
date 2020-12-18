import { Injectable } from '@angular/core';
import { QuantumExecutionResource } from './quantum-execution-resource.model';
// @ts-ignore
import quantumExecutionResources from '../../../data/QuantumExecutionResources.json';
import { FilterService } from '../filter/filter.service';
import { Filter } from '../filter/filter.model';



@Injectable({
  providedIn: 'root'
})
export class QuantumExecutionResourceService {

  quantumComputationResources: QuantumExecutionResource[] = quantumExecutionResources;

  constructor(private filterService: FilterService) {
  }

  getAllQuantumExecutionResources(): QuantumExecutionResource[] {
    return this.quantumComputationResources;
  }

  getActiveQuantumExecutionResources(): QuantumExecutionResource[] {
    return this.quantumComputationResources;
  }
}
