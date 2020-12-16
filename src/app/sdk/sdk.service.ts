import { Injectable } from '@angular/core';
import { Sdk } from './sdk.model';
// @ts-ignore
import softwareDevelopmentKitsJson from '../../../data/SoftwareDevelopmentKits.json';
import { FilterService } from '../filter/filter.service';
import { Filter } from '../filter/filter.model';
import { QcsService } from '../quantum-cloud-service/qcs.service';
import { ProgrammingLanguageService } from '../programming-language/programming-language.service';

@Injectable({
  providedIn: 'root'
})
export class SdkService {

  sdks: Sdk[] = softwareDevelopmentKitsJson;

  constructor(private filterService: FilterService, private qcsService: QcsService, private languageService: ProgrammingLanguageService) {
  }

  getSdks(): Sdk[] {
    return this.sdks;
  }

  getActiveSdks(): Sdk[] {
    const activeSdks: Sdk[] = [];
    for (const x of this.sdks) {
      if (this.isActive(x)) {
        activeSdks.push(x);
      }
    }
    return activeSdks;
  }

  isActive(sdk: Sdk): boolean {
    const filter: Filter = this.filterService.getActiveFilter();
    let result = true;
    if (filter.sdk !== '' && sdk.name !== filter.sdk) {
      result = false;
    }
    if (filter.license !== '' && !sdk.licenses.includes(filter.license)) {
      result = false;
    }
    if (filter.programmingLanguage !== '' && !sdk.programmingLanguages.includes(filter.programmingLanguage)) {
      result = false;
    }
    if (filter.assemblyLanguage !== '' && !sdk.compilerInputLanguages.includes(filter.assemblyLanguage) && !sdk.compilerOutputLanguages.includes(filter.assemblyLanguage)) {
      result = false;
    }
    if (filter.optimizationStrategy !== '' && !sdk.compilerOptimizationStrategies.includes(filter.optimizationStrategy)) {
      result = false;
    }
    if (filter.quantumCloudService !== '' && !sdk.supportedQuantumCloudServices.includes(filter.quantumCloudService)) {
      result = false;
    }

    // cross-table filtering: QCS
    let cloudServices = false;
    for (const activeQer of this.qcsService.getActiveQuantumExecutionResources()) {
      if (sdk.supportedQuantumCloudServices.includes(activeQer.name)) {
        cloudServices = true;
      }
    }
    if (!cloudServices) {
      result = false;
    }

    // cross-table filtering: Programming Language
    // let languages = false;
    // for (const activeLanguage of this.languageService.getActiveProgrammingLanguages()) {
    //   if (sdk.programmingLanguages.includes(activeLanguage.name)) {
    //     languages = true;
    //   }
    // }
    // if (!languages) {
    //   result = false;
    // }

    return result;
  }
}
