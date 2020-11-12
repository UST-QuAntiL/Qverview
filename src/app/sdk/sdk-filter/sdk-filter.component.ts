import { Component, OnInit } from '@angular/core';
import { SdkFilterUpdateService } from './sdk-filter-update.service';
import { Sdk } from '../sdk.model';

@Component({
  selector: 'app-filter',
  templateUrl: './sdk-filter.component.html',
  styleUrls: ['./sdk-filter.component.scss']
})
export class SdkFilterComponent implements OnInit {

  sdkFilter: Sdk;

  constructor(private filterUpdateService: SdkFilterUpdateService) { }

  ngOnInit(): void {
    this.filterUpdateService.events$.forEach(filterUpdateEvent => {
      this.sdkFilter = filterUpdateEvent;
    });
    this.clear();
  }

  licenseClicked(license: string): void {
    this.filterUpdateService.toggleLicense(license);
  }

  prorammingLanguageClicked(programmingLanguage: string): void {
    this.filterUpdateService.toggleProgrammingLanguage(programmingLanguage);
  }

  compilerInputLanguageClicked(compilerInputLanguage: string): void {
    this.filterUpdateService.toggleCompilerInputLanguage(compilerInputLanguage);
  }

  compilerOutputLanguageClicked(compilerOutputLanguage: string): void {
    this.filterUpdateService.toggleCompilerOutputLanguage(compilerOutputLanguage);
  }

  compilerOptimizationStrategyClicked(compilerOptimizationStrategy: string): void {
    this.filterUpdateService.toggleCompilerOptimizationStrategy(compilerOptimizationStrategy);
  }


  knowledgeReuseClicked(knowledgeReuse: string): void {
    this.filterUpdateService.toggleKnowledgeReuse(knowledgeReuse);
  }

  activeDevelopmentClicked(activeDevelopment: boolean): void {
    this.filterUpdateService.toggleActiveDevelopment(activeDevelopment);
  }

  supportedQuantumCloudServiceClicked(supportedQuantumCloudService: string): void {
    this.filterUpdateService.toggleSupportedQuantumCloudServices(supportedQuantumCloudService);
  }

  localSimulatorClicked(localSimulator: boolean): void {
    this.filterUpdateService.toggleLocalSimulator(localSimulator);
  }

  clear(): void {
    this.filterUpdateService.clear();
  }
}
