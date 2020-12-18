import { Injectable } from '@angular/core';
import { QuantumExecutionResource } from './quantum-execution-resource.model';
// @ts-ignore
import quantumExecutionResources from '../../../data/QuantumExecutionResources.json';
import { FilterService } from '../filter/filter.service';
import { QerFilterModel } from '../filter/qerFilter.model';
import { QuantumCloudService } from '../quantum-cloud-service/quantum-cloud-service.model';
import { QcsFilterModel } from '../filter/qcsFilter.model';



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

  getFilteredQers(qerFilter: QerFilterModel): QuantumExecutionResource[] {
    return this.getAllQuantumExecutionResources().filter(value => this.isActive(value, qerFilter));
  }

  isActive(qer: QuantumExecutionResource, filter: QerFilterModel): boolean {
    if (filter.names.length > 0 && !filter.names.includes(qer.name)) {
      return false;
    }
    if (filter.executionType.length > 0 && !filter.executionType.includes(qer.executionType)) {
      return false;
    }
    if (filter.computationModels.length > 0 && !filter.computationModels.includes(qer.computationModel)) {
      return false;
    }
    if (filter.vendors.length > 0 && !filter.vendors.includes(qer.vendor)) {
      return false;
    }
    return true;
  }
}
