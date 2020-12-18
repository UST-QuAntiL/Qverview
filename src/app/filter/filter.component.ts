import { Component, OnInit } from '@angular/core';
import { SdkService } from '../sdk/sdk.service';
import { FilterService } from './filter.service';
import { QuantumExecutionResourceService } from '../quantum-execution-resource/quantum-execution-resource.service';
import { QcsService } from '../quantum-cloud-service/qcs.service';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Sdk } from '../sdk/sdk.model';
import { SdkFilterModel } from './sdkFilter.model';
import { QcsFilterModel } from './QcsFilter.model';
import { QuantumCloudService } from '../quantum-cloud-service/quantum-cloud-service.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['../app.component.scss', './filter.component.scss']
})
export class FilterComponent implements OnInit {

  sdks: string[] = [];
  selectedSdks: string[] = [];
  licenses: string[] = [];
  selectedLicenses: any;
  programmingLanguages: string[] = [];
  selectedProgrammingLanguages: string[] = [];
  inputLanguages: string[] = [];
  selectedInputLanguages: string[] = [];
  outputLanguages: string[] = [];
  selectedOutputLanguages: string[] = [];
  optimizationStrategies: string[] = [];
  selectedOptimizationStrategies: string[] = [];

  sdkCrossTableQcs = false;
  quantumCloudServices: string[] = [];
  selectedQuantumCloudServices: string[] = [];
  accessMethods: string[] = [];
  selectedAccessMethods: string[] = [];
  serviceModels: string[] = [];
  selectedServiceModels: string[] = [];
  assemblyLanguages: string[] = [];
  selectedAssemblyLanguages: string[] = [];

  quantumExecutionResources: string[] = [];
  selectedQuantumExecutionResources: string[] = [];
  executionTypes: string[] = [];
  selectedExecutionType = '';
  computationModels: string[] = [];
  selectedComputationModels: string[] = [];
  vendors: string[] = [];
  selectedVendors: string[] = [];

  constructor(private filterService: FilterService, private sdkService: SdkService, private qcsService: QcsService,
              private qerService: QuantumExecutionResourceService) {
  }

  ngOnInit(): void {
    for (const sdk of this.sdkService.getAllSdks()) {
      this.sdks.push(sdk.name);
      this.addAll(sdk.licenses, this.licenses);
      this.addAll(sdk.programmingLanguages, this.programmingLanguages);
      this.addAll(sdk.compilerInputLanguages, this.inputLanguages);
      this.addAll(sdk.compilerOutputLanguages, this.outputLanguages);
      this.addAll(sdk.compilerOptimizationStrategies, this.optimizationStrategies);
    }
    for (const qcs of this.qcsService.getAllQuantumExecutionResources()) {
      this.quantumCloudServices.push(qcs.name);
      this.addAll(qcs.accessMethods, this.accessMethods);
      if (!this.serviceModels.includes(qcs.serviceModel)) {
        this.serviceModels.push(qcs.serviceModel);
      }
      this.addAll(qcs.assemblyLanguages, this.assemblyLanguages);
    }

    for (const qer of this.qerService.getAllQuantumExecutionResources()) {
      this.quantumExecutionResources.push(qer.name);
      this.executionTypes = ['QPU', 'Simulator'];
      if (!this.computationModels.includes(qer.computationModel)) {
        this.computationModels.push(qer.computationModel);
      }
      if (!this.vendors.includes(qer.vendor)) {
        this.vendors.push(qer.vendor);
      }
    }

    this.sdks.sort();
    this.licenses.sort();
    this.programmingLanguages.sort();
    this.inputLanguages.sort();
    this.outputLanguages.sort();
    this.optimizationStrategies.sort();

    this.quantumCloudServices.sort();
  }

  addAll(source: string[], target: string[]): void {
    source.forEach(x => {
      if (!target.includes(x)) {
        target.push(x);
      }
    });
  }

  changeSomething(): void {
    const sdkFilter: SdkFilterModel = {
      names: this.selectedSdks,
      licenses: this.selectedLicenses,
      programmingLanguages: this.selectedProgrammingLanguages,
      compilerInputLanguages: this.selectedInputLanguages,
      compilerOutputLanguages: this.selectedOutputLanguages,
      compilerOptimizationStrategies: this.selectedOptimizationStrategies,
      activeDevelopment: '',
      supportedQuantumCloudServices: [],
      localSimulator: '',
    };
    let filteredSdks: Sdk[] = this.sdkService.getFilteredSdks(sdkFilter);

    const qcsFilter: QcsFilterModel = {
      names: this.selectedQuantumCloudServices,
      accessMethods: this.selectedAccessMethods,
      serviceModels: this.selectedServiceModels,
      resources: [],
      assemblyLanguages: this.selectedAssemblyLanguages,
    };
    let filteredQcs: QuantumCloudService[] = this.qcsService.getFilteredQcs(qcsFilter);
    if (this.sdkCrossTableQcs) {

      let hasChanged = true;
      while (hasChanged) {
        const oldSdks = filteredSdks.length;
        const oldQcs = filteredQcs.length;

        filteredQcs = filteredQcs.filter(value => this.qcsIsSupportedBySdks(filteredSdks, value));
        filteredSdks = filteredSdks.filter(value => this.sdkIsSupportedByQcs(filteredQcs, value));

        hasChanged = (oldSdks !== filteredSdks.length || oldQcs !== filteredQcs.length);
      }

    }

    this.filterService.setSdkFilter(filteredSdks);
    this.filterService.setQcsFilter(filteredQcs);
  }

  changeCrossTable($event: MatCheckboxChange): void {
    this.sdkCrossTableQcs = $event.checked;
    this.changeSomething();
  }

  private qcsIsSupportedBySdks(sdks: Sdk[], quantumCloudService: QuantumCloudService): boolean {
    const allSupportedQcs: string[] = [];
    sdks.forEach(sdk => {
      sdk.supportedQuantumCloudServices.forEach(value => {
        if (!allSupportedQcs.includes(value)) {
          allSupportedQcs.push(value);
        }
      });
    });
    return allSupportedQcs.includes(quantumCloudService.name);
  }

  private sdkIsSupportedByQcs(qcss: QuantumCloudService[], sdk: Sdk): boolean {
    const namesOfAllActiveCloudServices: string[] = [];
    qcss.forEach(qcs => {
      if (!namesOfAllActiveCloudServices.includes(qcs.name)) {
        namesOfAllActiveCloudServices.push(qcs.name);
      }
    });

    let result = false;
    sdk.supportedQuantumCloudServices.forEach(qcs => {
      if (namesOfAllActiveCloudServices.includes(qcs)) {
        result = true;
      }
    });
    return result;
  }
}
