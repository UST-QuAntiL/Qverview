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
    license: '',
    activeDevelopment: '',
    programmingLanguage: '',
    languageType: '',
    syntaxImplementation: '',
    standardization: '',
    compiler: '',
    inputLanguage: '',
    outputLanguage: '',
    optimizationStrategy: '',
    sdk: '',
    localSimulator: '',
    quantumCloudService: '',
    accessMethod: '',
    serviceModel: '',
    resource: '',
    assemblyLanguage: '',
    quantumExecutionResource: '',
    resourceType: '',
    computationModel: '',
    vendor: ''
  };

  constructor() {
  }

  updateFilter(): void {
    this.subject.next(this.filter);
  }

  get events$(): Observable<Filter> {
    return this.subject.asObservable();
  }

  toggleOrchestrator(value: string): void {
    if (this.filter.orchestrator !== value) {
      this.filter.orchestrator = value;
    } else {
      this.filter.orchestrator = '';
    }
    this.updateFilter();
  }

  toggleProductionReady(value: string): void {
    if (this.filter.productionReady !== value) {
      this.filter.productionReady = value;
    } else {
      this.filter.productionReady = '';
    }
    this.updateFilter();
  }

  toggleLicense(value: string): void {
    if (this.filter.license !== value) {
      this.filter.license = value;
    } else {
      this.filter.license = '';
    }
    this.updateFilter();
  }

  toggleActiveDevelopment(value: string): void {
    if (this.filter.activeDevelopment !== value) {
      this.filter.activeDevelopment = value;
    } else {
      this.filter.activeDevelopment = '';
    }
    this.updateFilter();
  }

  toggleProgrammingLanguage(value: string): void {
    if (this.filter.programmingLanguage !== value) {
      this.filter.programmingLanguage = value;
    } else {
      this.filter.programmingLanguage = '';
    }
    this.updateFilter();
  }

  toggleLanguageType(value: string): void {
    if (this.filter.languageType !== value) {
      this.filter.languageType = value;
    } else {
      this.filter.languageType = '';
    }
    this.updateFilter();
  }

  toggleStandardization(value: string): void {
    if (this.filter.standardization !== value) {
      this.filter.standardization = value;
    } else {
      this.filter.standardization = '';
    }
    this.updateFilter();
  }

  toggleSyntaxImplementation(value: string): void {
    if (this.filter.syntaxImplementation !== value) {
      this.filter.syntaxImplementation = value;
    } else {
      this.filter.syntaxImplementation = '';
    }
    this.updateFilter();
  }

  toggleCompiler(value: string): void {
    if (this.filter.compiler !== value) {
      this.filter.compiler = value;
    } else {
      this.filter.compiler = '';
    }
    this.updateFilter();
  }

  toggleAssemblyLanguage(value: string): void {
    if (this.filter.assemblyLanguage !== value) {
      this.filter.assemblyLanguage = value;
    } else {
      this.filter.assemblyLanguage = '';
    }
    this.updateFilter();
  }

  toggleOptimizationStrategy(value: string): void {
    if (this.filter.optimizationStrategy !== value) {
      this.filter.optimizationStrategy = value;
    } else {
      this.filter.optimizationStrategy = '';
    }
    this.updateFilter();
  }

  toggleSdk(value: string): void {
    if (this.filter.sdk !== value) {
      this.filter.sdk = value;
    } else {
      this.filter.sdk = '';
    }
    this.updateFilter();
  }

  toggleLocalSimulator(value: string): void {
    if (this.filter.localSimulator !== value) {
      this.filter.localSimulator = value;
    } else {
      this.filter.localSimulator = '';
    }
    this.updateFilter();
  }

  toggleQuantumCloudService(value: string): void {
    if (this.filter.quantumCloudService !== value) {
      this.filter.quantumCloudService = value;
    } else {
      this.filter.quantumCloudService = '';
    }
    this.updateFilter();
  }

  toggleAccessMethod(value: string): void {
    if (this.filter.accessMethod !== value) {
      this.filter.accessMethod = value;
    } else {
      this.filter.accessMethod = '';
    }
    this.updateFilter();
  }

  toggleServiceModel(value: string): void {
    if (this.filter.serviceModel !== value) {
      this.filter.serviceModel = value;
    } else {
      this.filter.serviceModel = '';
    }
    this.updateFilter();
  }

  toggleQuantumExecutionResource(value: string): void {
    if (this.filter.quantumExecutionResource !== value) {
      this.filter.quantumExecutionResource = value;
    } else {
      this.filter.quantumExecutionResource = '';
    }
    this.updateFilter();
  }

  toggleResourceType(value: string): void {
    if (this.filter.resourceType !== value) {
      this.filter.resourceType = value;
    } else {
      this.filter.resourceType = '';
    }
    this.updateFilter();
  }

  toggleComputationModel(value: string): void {
    if (this.filter.computationModel !== value) {
      this.filter.computationModel = value;
    } else {
      this.filter.computationModel = '';
    }
    this.updateFilter();
  }

  toggleVendor(value: string): void {
    if (this.filter.vendor !== value) {
      this.filter.vendor = value;
    } else {
      this.filter.vendor = '';
    }
    this.updateFilter();
  }

  getActiveFilter(): Filter {
    return this.filter;
  }
}
