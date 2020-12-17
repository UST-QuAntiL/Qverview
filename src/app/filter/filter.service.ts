import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Filter } from './filter.model';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  private subject = new Subject<Filter>();
  private filter: Filter = {
    orchestrator: '',
    productionReady: '',
    licenses: [],
    activeDevelopment: '',
    programmingLanguages: [],
    languageType: '',
    syntaxImplementation: '',
    standardization: '',
    compiler: '',
    inputLanguages: [],
    outputLanguages: [],
    optimizationStrategies: [],
    sdks: [],
    localSimulator: '',
    quantumCloudServices: [],
    accessMethods: [],
    serviceModels: [],
    assemblyLanguages: [],
    quantumExecutionResources: [],
    executionTypes: '',
    computationModels: [],
    vendors: []
  };

  constructor() {
  }

  updateFilter(): void {
    this.subject.next(this.filter);
  }

  get events$(): Observable<Filter> {
    return this.subject.asObservable();
  }

  getActiveFilter(): Filter {
    return this.filter;
  }

  setSdkFilter(sdks: string[]): void {
    this.filter.sdks = sdks;
    this.updateFilter();
  }

  setLicenseFilter(selectedLicenses: string[]): void {
    this.filter.licenses = selectedLicenses;
    this.updateFilter();
  }

  setProgrammingLanguageFilter(programmingLanguages: string[]): void {
    this.filter.programmingLanguages = programmingLanguages;
    this.updateFilter();
  }

  setOutputLanguageFilter(outputLanguages: string[]): void {
    this.filter.outputLanguages = outputLanguages;
    this.updateFilter();
  }

  setInputLanguageFilter(inputLanguages: string[]): void {
    this.filter.inputLanguages = inputLanguages;
    this.updateFilter();
  }

  setOptimizationStrategyFilter(selectedOptimizationStrategies: string[]): void {
    this.filter.optimizationStrategies = selectedOptimizationStrategies;
    this.updateFilter();
  }

  setQcsFilter(selectedQuantumCloudServices: string[]): void {
    this.filter.quantumCloudServices = selectedQuantumCloudServices;
    this.updateFilter();
  }

  setAccessMethodFilter(accessMethods: string[]): void {
    this.filter.accessMethods = accessMethods;
    this.updateFilter();
  }

  setServiceModelFilter(serviceModels: string[]): void {
    this.filter.serviceModels = serviceModels;
    this.updateFilter();
  }

  setAssemblyLanguageFilter(assemblyLanguages: string[]): void {
    this.filter.assemblyLanguages = assemblyLanguages;
    this.updateFilter();
  }

  setQerFilter(quantumExecutionResources: string[]): void {
    this.filter.quantumExecutionResources = quantumExecutionResources;
    this.updateFilter();
  }

  setExecutionTypeFilter(executionType: string): void {
    this.filter.executionTypes = executionType;
  }

  setComputationModelFilter(computationModels: string[]): void {
    this.filter.computationModels = computationModels;
    this.updateFilter();
  }

  setVendorFilter(vendors: string[]): void {
    this.filter.vendors = vendors;
    this.updateFilter();
  }
}
