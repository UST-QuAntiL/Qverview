import { Injectable } from '@angular/core';
import { QuantumCloudService } from './quantum-cloud-service.model';
// @ts-ignore
import cloudServicesJson from '../../../data/CloudServices.json';
import { FilterService } from '../filter/filter.service';
import { QuantumExecutionResourceService } from '../quantum-execution-resource/quantum-execution-resource.service';
import { SdkService } from '../sdk/sdk.service';

@Injectable({
  providedIn: 'root'
})
export class QcsService {

  qcs: QuantumCloudService[] = cloudServicesJson;

  constructor(private filterService: FilterService, private qerService: QuantumExecutionResourceService) { }

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

  private isActive(qcs: QuantumCloudService): boolean {
    const filter = this.filterService.getActiveFilter();
    let result = true;
    if (filter.quantumCloudService !== '' && qcs.name !== filter.quantumCloudService) {
      result = false;
    }
    if (filter.assemblyLanguage !== '' && !qcs.assemblyLanguages.includes(filter.assemblyLanguage)) {
      result = false;
    }
    if (filter.serviceModel !== '' && qcs.serviceModel !== filter.serviceModel) {
      result = false;
    }
    if (filter.accessMethod !== '' && !qcs.accessMethods.includes(filter.accessMethod)) {
      result = false;
    }

    // cross-table filtering: Resources
    let resources = false;
    for (const availableResources of this.qerService.getActiveQuantumExecutionResources()) {
      if (qcs.resources.includes(availableResources.name)) {
        resources = true;
      }
    }
    if (!resources) {
      result = false;
    }


    return result;
  }
}
