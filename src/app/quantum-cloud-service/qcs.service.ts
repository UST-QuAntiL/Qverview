import { Injectable } from '@angular/core';
import { QuantumCloudService } from './quantum-cloud-service.model';
// @ts-ignore
import cloudServicesJson from '../../../data/CloudServices.json';
import { FilterService } from '../filter/filter.service';
import { SdkService } from '../sdk/sdk.service';
import { QcsFilterModel } from '../filter/QcsFilter.model';
import { Sdk } from '../sdk/sdk.model';
import { SdkFilterModel } from '../filter/sdkFilter.model';

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

  getFilteredQcs(filter: QcsFilterModel): QuantumCloudService[] {
    const result: QuantumCloudService[] = [];
    for (const x of this.getAllQuantumExecutionResources()) {
      if (this.isActive(x, filter)) {
        result.push(x);
      }
    }
    return result;
  }

  isActive(qcs: QuantumCloudService, filter: QcsFilterModel): boolean {
    if (filter.names.length > 0 && !filter.names.includes(qcs.name)) {
      return false;
    }
    if (!this.supportsOneOf(filter.accessMethods, qcs.accessMethods)) {
      return false;
    }
    if (filter.serviceModels.length > 0 && !filter.serviceModels.includes(qcs.serviceModel)) {
      return false;
    }
    if (!this.supportsOneOf(filter.resources, qcs.resources)) {
      return false;
    }
    if (!this.supportsOneOf(filter.assemblyLanguages, qcs.assemblyLanguages)) {
      return false;
    }
    return true;
  }

  private supportsOneOf(filter: string[], obj: string[]): boolean {
    if (filter == null || filter.length === 0) {
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
