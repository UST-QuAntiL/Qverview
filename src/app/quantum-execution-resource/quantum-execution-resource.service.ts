import { Injectable } from '@angular/core';
import { QuantumExecutionResource } from './quantum-execution-resource.model';
// @ts-ignore
import quantumExecutionResources from '../../../data/QuantumExecutionResources.json';
import { FilterService } from '../filter/filter.service';



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
    const result: QuantumExecutionResource[] = [];
    for (const x of this.getAllQuantumExecutionResources()) {
      if (this.isActive(x)) {
        result.push(x);
      }
    }
    return result;
  }

  isActive(quantumExecutionResource: QuantumExecutionResource): boolean {
    const filter = this.filterService.getActiveFilter();
    let result = true;
    if (filter.quantumExecutionResource !== '' && filter.quantumExecutionResource !== quantumExecutionResource.name) {
      result = false;
    }
    if (filter.resourceType !== '' && filter.resourceType !== quantumExecutionResource.type) {
      result = false;
    }
    if (filter.computationModel !== '' && filter.computationModel !== quantumExecutionResource.computationModel) {
      result = false;
    }
    if (filter.vendor !== '' && filter.vendor !== quantumExecutionResource.vendor) {
      result = false;
    }
    return result;
  }
}
