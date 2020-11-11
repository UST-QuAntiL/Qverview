import { Component, OnInit } from '@angular/core';
import { FilterUpdateService } from './filter-update.service';
import { Sdk } from '../sdk/sdk.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  sdkFilter: Sdk;

  constructor(private filterUpdateService: FilterUpdateService) { }

  ngOnInit(): void {
    this.filterUpdateService.events$.forEach(filterUpdateEvent => {
      this.sdkFilter = filterUpdateEvent;
    });
    this.clear();
  }

  licenseClicked(license: string) {
    this.filterUpdateService.toggleLicense(license);
  }

  prorammingLanguageClicked(programmingLanguage: string) {
    this.filterUpdateService.toggleProgrammingLanguage(programmingLanguage);
  }

  compilerInputLanguageClicked(compilerInputLanguage: string) {
    this.filterUpdateService.toggleCompilerInputLanguage(compilerInputLanguage);
  }

  compilerOutputLanguageClicked(compilerOutputLanguage: string) {
    this.filterUpdateService.toggleCompilerOutputLanguage(compilerOutputLanguage);
  }

  compilerOptimizationStrategyClicked(compilerOptimizationStrategy: string) {
    this.filterUpdateService.toggleCompilerOptimizationStrategy(compilerOptimizationStrategy);
  }


  knowledgeReuseClicked(knowledgeReuse: string) {
    this.filterUpdateService.toggleKnowledgeReuse(knowledgeReuse);
  }

  activeDevelopmentClicked(activeDevelopment: boolean) {
    this.filterUpdateService.toggleActiveDevelopment(activeDevelopment);
  }

  supportedQuantumCloudServiceClicked(supportedQuantumCloudService: string) {
    this.filterUpdateService.toggleSupportedQuantumCloudServices(supportedQuantumCloudService);
  }

  clear() {
    this.filterUpdateService.clear()
  }
}
