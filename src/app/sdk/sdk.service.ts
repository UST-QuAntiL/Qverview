import { Injectable } from '@angular/core';
import { Sdk } from './sdk.model';
// @ts-ignore
import softwareDevelopmentKitsJson from '../../../data/SoftwareDevelopmentKits.json';
import { SdkFilterModel } from '../filter/sdkFilter.model';

@Injectable({
  providedIn: 'root'
})
export class SdkService {

  sdks: Sdk[] = softwareDevelopmentKitsJson;

  constructor() {
  }

  getAllSdks(): Sdk[] {
    return this.sdks;
  }

  getFilteredSdks(sdkFilter: SdkFilterModel): Sdk[] {
    const result: Sdk[] = [];
    for (const x of this.getAllSdks()) {
      if (this.isActive(x, sdkFilter)) {
        result.push(x);
      }
    }
    return result;
  }

  isActive(sdk: Sdk, filter: SdkFilterModel): boolean {
    let result = true;
    if (filter.names.length > 0 && !filter.names.includes(sdk.name)) {
      result = false;
    }
    if (!this.supportsOneOf(filter.licenses, sdk.licenses)) {
      result = false;
    }
    if (!this.supportsOneOf(filter.programmingLanguages, sdk.programmingLanguages)) {
      result = false;
    }
    if (!this.supportsOneOf(filter.compilerInputLanguages, sdk.compilerInputLanguages)) {
      result = false;
    }
    if (!this.supportsOneOf(filter.compilerOutputLanguages, sdk.compilerOutputLanguages)) {
      result = false;
    }
    if (!this.supportsOneOf(filter.compilerOptimizationStrategies, sdk.compilerOptimizationStrategies)) {
      result = false;
    }
    if (filter.activeDevelopment !== '' && filter.activeDevelopment !== sdk.activeDevelopment) {
      result = false;
    }
    if (!this.supportsOneOf(filter.supportedQuantumCloudServices, sdk.supportedQuantumCloudServices)) {
      result = false;
    }
    if (filter.localSimulator !== '' && filter.localSimulator !== sdk.localSimulator) {
      result = false;
    }

    return result;
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
