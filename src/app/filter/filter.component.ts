import { Component, OnInit } from '@angular/core';
import { SdkService } from '../sdk/sdk.service';
import { FilterService } from './filter.service';
import { QuantumExecutionResourceService } from '../quantum-execution-resource/quantum-execution-resource.service';
import { QcsService } from '../quantum-cloud-service/qcs.service';
import { Sdk } from '../sdk/sdk.model';
import { SdkFilterModel } from './sdkFilter.model';
import { QcsFilterModel } from './qcsFilter.model';
import { QuantumCloudService } from '../quantum-cloud-service/quantum-cloud-service.model';
import { QerFilterModel } from './qerFilter.model';
import { QuantumExecutionResource } from '../quantum-execution-resource/quantum-execution-resource.model';
import { ProgrammingLanguageService } from '../programming-language/programming-language.service';
import { ProgrammingLanguage } from '../programming-language/programming-language.model';
import { QplFilterModel } from './qplFilter.model';
import { CompilerFilterModel } from './compilerFilter.model';
import { CompilerService } from '../compiler/compiler.service';
import { Compiler } from '../compiler/compiler.model';
import { OrchestratorService } from '../orchestrator/orchestrator.service';
import { Orchestrator } from '../orchestrator/orchestrator.model';
import { OrchestratorFilterModel } from './orchestratorFilter.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['../app.component.scss', './filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor(private filterService: FilterService, private sdkService: SdkService, private qcsService: QcsService,
              private qerService: QuantumExecutionResourceService, private qplService: ProgrammingLanguageService,
              private compilerService: CompilerService, private orchestratorService: OrchestratorService) {
    this.filterService.syncSdkQcsEvent$.subscribe(value => {
      this.sdkCrossTableQcs = value;
      this.updateView();
    });
    this.filterService.syncQcsQerEvent$.subscribe(value => {
      this.qcsCrossTableQer = value;
      this.updateView();
    });
  }

  sdks = [];
  selectedSdks = [];
  licenses = [];
  selectedLicenses: any = [];
  programmingLanguages = [];
  selectedProgrammingLanguages = [];
  inputLanguages = [];
  selectedInputLanguages = [];
  outputLanguages = [];
  selectedOutputLanguages = [];
  optimizationStrategies = [];
  selectedOptimizationStrategies = [];

  sdkCrossTableQcs = false;
  quantumCloudServices = [];
  selectedQuantumCloudServices = [];
  accessMethods = [];
  selectedAccessMethods = [];
  serviceModels = [];
  selectedServiceModels = [];
  assemblyLanguages = [];
  selectedAssemblyLanguages = [];

  qcsCrossTableQer = false;
  quantumExecutionResources = [];
  selectedQuantumExecutionResources = [];
  executionTypes = [];
  selectedExecutionType = [];
  computationModels = [];
  selectedComputationModels = [];
  vendors = [];
  selectedVendors = [];

  qplTypes = [];
  selectedQplTypes = [];
  qplSyntaxImplementations = [];
  selectedQplSyntaxImplementations = [];
  qplStandardizations = [];
  selectedQplStandardizations = [];

  compilers = [];
  selectedCompilers = [];
  compilerInputLanguages = [];
  selectedCompilerInputLanguages = [];
  compilerOutputLanguages = [];
  selectedCompilerOutputLanguages = [];
  compilerOptimizationStrategies = [];
  selectedCompilerOptimizationStrategies = [];

  orchestrators = [];
  selectedOrchestrators = [];
  orchestratorLicenses = [];
  selectedOrchestratorLicenses = [];
  orchestratorProgrammingLanguages = [];
  selectedOrchestratorProgrammingLanguages = [];
  activeDevelopment = ['true', 'false'];
  selectedActiveDevelopment = [];
  productionReady = ['true', 'false'];
  selectedProductionReady = [];

  ngOnInit(): void {
    for (const sdk of this.sdkService.getAllSdks()) {
      this.sdks.push(sdk.name);
      this.addAll(sdk.licenses, this.licenses);
      this.addAll(sdk.programmingLanguages, this.programmingLanguages);
      this.addAll(sdk.compilerInputLanguages, this.inputLanguages);
      this.addAll(sdk.compilerOutputLanguages, this.outputLanguages);
      this.addAll(sdk.compilerOptimizationStrategies, this.optimizationStrategies);
    }

    for (const qcs of this.qcsService.getAllQuantumCloudServicesResources()) {
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

    for (const qpl of this.qplService.getAllProgrammingLanguages()) {
      if (!this.qplTypes.includes(qpl.type)) {
        this.qplTypes.push(qpl.type);
      }
      if (!this.qplSyntaxImplementations.includes(qpl.syntaxImplementation)) {
        this.qplSyntaxImplementations.push(qpl.syntaxImplementation);
      }
      if (!this.qplStandardizations.includes(qpl.standardization)) {
        this.qplStandardizations.push(qpl.standardization);
      }
    }

    for (const compiler of this.compilerService.getAllCompilers()) {
      this.compilers.push(compiler.name);
      this.addAll(compiler.inputLanguages, this.compilerInputLanguages);
      this.addAll(compiler.outputLanguages, this.compilerOutputLanguages);
      this.addAll(compiler.optimizationStrategies, this.compilerOptimizationStrategies);
    }

    for (const orchestrator of this.orchestratorService.getAllOrchestrators()) {
      this.orchestrators.push(orchestrator.name);
      this.addAll(orchestrator.licenses, this.orchestratorLicenses);
      this.addAll(orchestrator.programmingLanguages, this.orchestratorProgrammingLanguages);
    }

    this.sdks.sort();
    this.licenses.sort();
    this.programmingLanguages.sort();
    this.inputLanguages.sort();
    this.outputLanguages.sort();
    this.optimizationStrategies.sort();
    this.quantumCloudServices.sort();

    this.quantumCloudServices.sort();
    this.accessMethods.sort();
    this.serviceModels.sort();
    this.assemblyLanguages.sort();

    this.quantumExecutionResources.sort();
    this.executionTypes.sort();
    this.computationModels.sort();
    this.vendors.sort();

    this.qplTypes.sort();
    this.qplSyntaxImplementations.sort();
    this.qplStandardizations.sort();

    this.compilers.sort();
    this.compilerInputLanguages.sort();
    this.compilerOutputLanguages.sort();
    this.compilerOptimizationStrategies.sort();

    this.orchestrators.sort();
    this.orchestratorLicenses.sort();
    this.orchestratorProgrammingLanguages.sort();
  }

  addAll(source, target): void {
    source.forEach(x => {
      if (!target.includes(x)) {
        target.push(x);
      }
    });
  }

  updateView(): void {
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

    const qerFilter: QerFilterModel = {
      names: this.selectedQuantumExecutionResources,
      executionType: this.selectedExecutionType,
      computationModels: this.selectedComputationModels,
      vendors: this.selectedVendors
    };
    let filteredQers: QuantumExecutionResource[] = this.qerService.getFilteredQers(qerFilter);

    let hasChanged = true;
    while (hasChanged) {
      const oldSdks = filteredSdks.length;
      const oldQcs = filteredQcs.length;
      const oldQers = filteredQers.length;
      if (this.sdkCrossTableQcs) {
        filteredQcs = filteredQcs.filter(value => this.qcsIsSupportedBySdks(filteredSdks, value));
        filteredSdks = filteredSdks.filter(value => this.sdkIsSupportedByQcs(filteredQcs, value));
      }
      if (this.qcsCrossTableQer) {
        filteredQers = filteredQers.filter(value => this.qerIsSupportedByQcs(filteredQcs, value));
        filteredQcs = filteredQcs.filter(value => this.qcsIsSupportedByQer(filteredQers, value));
      }
      hasChanged = (oldSdks !== filteredSdks.length || oldQcs !== filteredQcs.length || oldQers !== filteredQers.length);
    }

    const qplFilter: QplFilterModel = {
      names: this.selectedProgrammingLanguages,
      types: this.selectedQplTypes,
      syntaxImplementations: this.selectedQplSyntaxImplementations,
      standardizations: this.selectedQplStandardizations
    };
    const filteredQpls: ProgrammingLanguage[] = this.qplService.getFilteredQpls(qplFilter);

    const compilerFilter: CompilerFilterModel = {
      names: this.selectedCompilers,
      inputLanguages: this.selectedCompilerInputLanguages,
      outputLanguages: this.selectedCompilerOutputLanguages,
      optimizationStrategies: this.selectedCompilerOptimizationStrategies
    };
    const filteredCompilers: Compiler[] = this.compilerService.getFilteredCompilers(compilerFilter);

    const orchestratorFilter: OrchestratorFilterModel = {
      names: this.selectedOrchestrators,
      licenses: this.selectedOrchestratorLicenses,
      programmingLanguages: this.selectedOrchestratorProgrammingLanguages,
      activeDevelopment: this.selectedActiveDevelopment,
      productionReady: this.selectedProductionReady
    };
    const filteredOrchestrators: Orchestrator[] = this.orchestratorService.getFilteredOrchestrators(orchestratorFilter);

    this.filterService.setSdkFilter(filteredSdks);
    this.filterService.setQcsFilter(filteredQcs);
    this.filterService.setQerFilter(filteredQers);
    this.filterService.setQplFilter(filteredQpls);
    this.filterService.setCompilerFilter(filteredCompilers);
    this.filterService.setOrchestratorFilter(filteredOrchestrators);
  }

  private qcsIsSupportedBySdks(sdks: Sdk[], quantumCloudService: QuantumCloudService): boolean {
    const allSupportedQcs = [];
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
    const namesOfAllActiveCloudServices = [];
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

  private qerIsSupportedByQcs(qcss: QuantumCloudService[], qer: QuantumExecutionResource): boolean {
    const namesOfAllSupportedQers = [];
    qcss.forEach(qcs => {
      qcs.resources.forEach(value => {
        if (!namesOfAllSupportedQers.includes(value)) {
          namesOfAllSupportedQers.push(value);
        }
      });
    });
    return namesOfAllSupportedQers.includes(qer.name);
  }

  private qcsIsSupportedByQer(qers: QuantumExecutionResource[], qcs: QuantumCloudService): boolean {
    const namesOfAllActiveQers = [];
    qers.forEach(qer => {
      if (!namesOfAllActiveQers.includes(qer.name)) {
        namesOfAllActiveQers.push(qer.name);
      }
    });

    let result = false;
    qcs.resources.forEach(qer => {
      if (namesOfAllActiveQers.includes(qer)) {
        result = true;
      }
    });
    return result;
  }

  clearAll(): void {
    this.selectedSdks = [];
    this.selectedLicenses = [];
    this.selectedProgrammingLanguages = [];
    this.selectedInputLanguages = [];
    this.selectedOutputLanguages = [];
    this.selectedOptimizationStrategies = [];
    this.selectedQuantumCloudServices = [];
    this.selectedAccessMethods = [];
    this.selectedServiceModels = [];
    this.selectedAssemblyLanguages = [];
    this.selectedQuantumExecutionResources = [];
    this.selectedExecutionType = [];
    this.selectedComputationModels = [];
    this.selectedVendors = [];
    this.selectedQplTypes = [];
    this.selectedQplStandardizations = [];
    this.selectedQplSyntaxImplementations = [];
    this.selectedCompilers = [];
    this.selectedCompilerInputLanguages = [];
    this.selectedCompilerOutputLanguages = [];
    this.selectedCompilerOptimizationStrategies = [];
    this.selectedOrchestrators = [];
    this.selectedOrchestratorLicenses = [];
    this.selectedOrchestratorProgrammingLanguages = [];
    this.selectedActiveDevelopment = [];
    this.selectedProductionReady = [];

    this.updateView();
  }

  clearSdks(): void {
    this.selectedSdks = [];
    this.updateView();
  }

  clearLicenses(): void {
    this.selectedLicenses = [];
    this.updateView();
  }

  clearProgrammingLanguages(): void {
    this.selectedProgrammingLanguages = [];
    this.updateView();
  }

  clearInputLanguages(): void {
    this.selectedInputLanguages = [];
    this.updateView();
  }

  clearOutputLanguages(): void {
    this.selectedOutputLanguages = [];
    this.updateView();
  }

  clearOptimizationStrategies(): void {
    this.selectedOptimizationStrategies = [];
    this.updateView();
  }

  clearQcs(): void {
    this.selectedQuantumCloudServices = [];
    this.updateView();
  }

  clearAccessMethods(): void {
    this.selectedAccessMethods = [];
    this.updateView();
  }

  clearServiceModels(): void {
    this.selectedServiceModels = [];
    this.updateView();
  }

  clearAssemlbyLanguages(): void {
    this.selectedAssemblyLanguages = [];
    this.updateView();
  }

  clearQer(): void {
    this.selectedQuantumExecutionResources = [];
    this.updateView();
  }

  clearExecutionType(): void {
    this.selectedExecutionType = [];
    this.updateView();
  }

  clearComputationModel(): void {
    this.selectedComputationModels = [];
    this.updateView();
  }

  clearVendor(): void {
    this.selectedVendors = [];
    this.updateView();
  }

  searchAll(event: KeyboardEvent): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filterService.search(filterValue.trim().toLowerCase());
  }

  clearQplTypes(): void {
    this.selectedQplTypes = [];
    this.updateView();
  }

  clearQplSyntaxImplementations(): void {
    this.selectedQplSyntaxImplementations = [];
    this.updateView();
  }

  clearCompilers(): void {
    this.compilers = [];
    this.updateView();
  }

  clearCompilerInputLanguages(): void {
    this.compilerInputLanguages = [];
    this.updateView();
  }

  clearCompilerOutputLanguages(): void {
    this.compilerOutputLanguages = [];
    this.updateView();
  }

  clearCompilerOptimizationStrategies(): void {
    this.compilerOptimizationStrategies = [];
    this.updateView();
  }

  clearOrchestrators(): void {
    this.orchestrators = [];
    this.updateView();
  }

  clearOrchestratorLicenses(): void {
    this.orchestratorLicenses = [];
    this.updateView();
  }

  clearOrchestratorLanguages(): void {
    this.orchestratorProgrammingLanguages = [];
    this.updateView();
  }

  clearActiveDevelopment(): void {
    this.activeDevelopment = [];
    this.updateView();
  }

  clearProductionReady(): void {
    this.productionReady = [];
    this.updateView();
  }
}
