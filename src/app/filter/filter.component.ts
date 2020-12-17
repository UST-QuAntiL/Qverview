import { Component, OnInit } from '@angular/core';
import { SdkService } from '../sdk/sdk.service';
import { FilterService } from './filter.service';
import { QuantumExecutionResourceService } from '../quantum-execution-resource/quantum-execution-resource.service';
import { QcsService } from '../quantum-cloud-service/qcs.service';
import { MatCheckboxChange } from '@angular/material/checkbox';

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

  constructor(private filterService: FilterService, private sdkService: SdkService, private qcsService: QcsService, private qerService: QuantumExecutionResourceService) {
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

  changeSdkSelection(): void {
    this.filterService.setSdkFilter(this.selectedSdks);
  }

  changeLicenseSelection(): void {
    this.filterService.setLicenseFilter(this.selectedLicenses);
  }

  changeProgrammingLanguageSelection(): void {
    this.filterService.setProgrammingLanguageFilter(this.selectedProgrammingLanguages);
  }

  changeInputLanguages(): void {
    this.filterService.setInputLanguageFilter(this.selectedInputLanguages);
  }

  changeOutputLanguages(): void {
    this.filterService.setOutputLanguageFilter(this.selectedOutputLanguages);
  }

  changeOptimizationStrategySelection(): void {
    this.filterService.setOptimizationStrategyFilter(this.selectedOptimizationStrategies);
  }

  changeQuantumCloudServiceSelection(): void {
    this.filterService.setQcsFilter(this.selectedQuantumCloudServices);
  }

  changeAccessMethodSelection(): void {
    this.filterService.setAccessMethodFilter(this.selectedAccessMethods);
    this.crossTable();
  }

  changeServiceModelSelection(): void {
    this.filterService.setServiceModelFilter(this.selectedServiceModels);
  }

  changeAssemblyLanguageSelection(): void {
    this.filterService.setAssemblyLanguageFilter(this.selectedAssemblyLanguages);
  }

  changeQerSelection(): void {
    this.filterService.setQerFilter(this.selectedQuantumExecutionResources);
  }

  changeExecutionTypeSelection(): void {
    this.filterService.setExecutionTypeFilter(this.selectedExecutionType);
  }

  changeComputationModelSelection(): void {
    this.filterService.setComputationModelFilter(this.selectedComputationModels);
  }

  changeVendorSelection(): void {
    this.filterService.setVendorFilter(this.selectedVendors);
  }

  crossTable(): void {
    if (this.sdkCrossTableQcs) {
      const allActiveQcsFromSdk: string[] = [];
      this.sdkService.getActiveSdks().forEach(value => {
        value.supportedQuantumCloudServices.forEach(qcs => {
          if (!allActiveQcsFromSdk.includes(qcs)) {
            allActiveQcsFromSdk.push(qcs);
          }
        });
      });
      console.log(allActiveQcsFromSdk);

      console.log(this.qcsService.getNamesOfActiveQuantumExecutionResource());

      const filteredArray = allActiveQcsFromSdk.filter(value => this.qcsService.getNamesOfActiveQuantumExecutionResource().includes(value));
      console.log(filteredArray);
      this.selectedQuantumCloudServices = filteredArray;
    }
    this.changeQuantumCloudServiceSelection();
  }

  changeCrossTable($event: MatCheckboxChange): void {
    this.sdkCrossTableQcs = $event.checked;
  }
}
