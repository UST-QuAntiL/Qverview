import { Injectable } from '@angular/core';
import { QuantumCloudService } from './quantum-cloud-service.model';
// @ts-ignore
import cloudServicesJson from '../../../data/CloudServices.json';
import { FilterService } from '../filter/filter.service';
import { Filter } from '../filter/filter.model';
import { SdkService } from '../sdk/sdk.service';

@Injectable({
  providedIn: 'root'
})
export class QcsService {

  qcs: QuantumCloudService[] = cloudServicesJson;

  constructor(private filterService: FilterService, private sdkService: SdkService) {
  }

  getAllQuantumExecutionResources(): QuantumCloudService[] {
    return this.qcs;
  }

  getActiveQuantumExecutionResources(): QuantumCloudService[] {
    const result: QuantumCloudService[] = [];
    for (const x of this.getAllQuantumExecutionResources()) {
      if (this.isActive(x)) {
        result.push(x);
      }
    }
    return result;
  }

  getNamesOfActiveQuantumExecutionResource(): string[] {
    const result: string[] = [];
    for (const x of this.getActiveQuantumExecutionResources()) {
      result.push(x.name);
    }
    return result;
  }

  private isActive(qcs: QuantumCloudService): boolean {
    const filter: Filter = this.filterService.getActiveFilter();
    let result = true;
    if (filter.quantumCloudServices.length > 0 && !filter.quantumCloudServices.includes(qcs.name)) {
      result = false;
    }
    if (!this.supportsOneOf(filter.accessMethods, qcs.accessMethods)) {
      result = false;
    }
    if (filter.serviceModels.length > 0 && !filter.serviceModels.includes(qcs.serviceModel)) {
      result = false;
    }
    if (!this.supportsOneOf(filter.assemblyLanguages, qcs.assemblyLanguages)) {
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
