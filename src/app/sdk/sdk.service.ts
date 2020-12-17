import { Injectable } from '@angular/core';
import { Sdk } from './sdk.model';
// @ts-ignore
import softwareDevelopmentKitsJson from '../../../data/SoftwareDevelopmentKits.json';
import { FilterService } from '../filter/filter.service';
import { Filter } from '../filter/filter.model';

@Injectable({
  providedIn: 'root'
})
export class SdkService {

  sdks: Sdk[] = softwareDevelopmentKitsJson;

  constructor(private filterService: FilterService) {
  }

  getAllSdks(): Sdk[] {
    return this.sdks;
  }

  getActiveSdks(): Sdk[] {
    const activeSdks: Sdk[] = [];
    for (const sdk of this.sdks) {
      if (this.isActive(sdk)) {
        activeSdks.push(sdk);
      }
    }
    return activeSdks;
  }

  isActive(sdk: Sdk): boolean {
    const filter: Filter = this.filterService.getActiveFilter();
    let result = true;
    if (filter.sdks.length > 0 && !filter.sdks.includes(sdk.name)) {
      result = false;
    }
    if (!this.supportsOneOf(filter.licenses, sdk.licenses)) {
      result = false;
    }
    if (!this.supportsOneOf(filter.programmingLanguages, sdk.programmingLanguages)) {
      result = false;
    }
    if (!this.supportsOneOf(filter.inputLanguages, sdk.compilerInputLanguages)) {
      result = false;
    }
    if (!this.supportsOneOf(filter.outputLanguages, sdk.compilerOutputLanguages)) {
      result = false;
    }
    if (!this.supportsOneOf(filter.optimizationStrategies, sdk.compilerOptimizationStrategies)) {
      result = false;
    }
    if (!this.supportsOneOf(filter.quantumCloudServices, sdk.supportedQuantumCloudServices)) {
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
