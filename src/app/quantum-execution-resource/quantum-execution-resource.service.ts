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
    const result: QuantumExecutionResource[] = [];
    for (const x of this.getAllQuantumExecutionResources()) {
      if (this.isActive(x)) {
        result.push(x);
      }
    }
    return result;
  }

  isActive(qer: QuantumExecutionResource): boolean {
    const filter: Filter = this.filterService.getActiveFilter();
    let result = true;
    if (filter.quantumExecutionResources.length > 0 && !filter.quantumExecutionResources.includes(qer.name)) {
      result = false;
    }
    if (filter.executionTypes.length > 0 && !filter.executionTypes.includes(qer.executionType)) {
      result = false;
    }
    if (filter.computationModels.length > 0 && !filter.computationModels.includes(qer.computationModel)) {
      result = false;
    }
    if (filter.vendors.length > 0 && !filter.vendors.includes(qer.vendor)) {
      result = false;
    }
    return result;
  }

  private supportsOneOf(filter: string[], obj: string[]): boolean {
    if (filter.length === 0) {
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
