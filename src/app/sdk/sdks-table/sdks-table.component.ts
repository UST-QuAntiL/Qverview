import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SdkService } from '../sdk.service';
import { SdkFilterUpdateService } from '../sdk-filter/sdk-filter-update.service';
import { Sdk } from '../sdk.model';

@Component({
  selector: 'app-sdks-table',
  templateUrl: './sdks-table.component.html',
  styleUrls: ['./sdks-table.component.scss']
})
export class SdksTableComponent implements OnInit {

  dataSource;
  displayedColumns = [
    'name',
    'licenses',
    'programmingLanguages',
    'compilerInputLanguages',
    'compilerOutputLanguages',
    'compilerOptimizationStrategies',
    'knowledgeReuses',
    'activeDevelopment',
    'supportedQuantumCloudServices',
    'localSimulator',
  ];
  private sdkFilter: Sdk;

  constructor(private sdkService: SdkService, private sdkFilterUpdateService: SdkFilterUpdateService) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.sdkService.getSdks());
    this.dataSource.filterPredicate = (data, filter: string) => {
      let result = true;
      const f = JSON.parse(filter);
      for (const x of f.licenses) {
        if (!data.licenses.includes(x)) {
          result = false;
        }
      }
      for (const x of f.programmingLanguages) {
        if (!data.programmingLanguages.includes(x)) {
          result = false;
        }
      }
      for (const x of f.compilerInputLanguages) {
        if (!data.compilerInputLanguages.includes(x)) {
          result = false;
        }
      }
      for (const x of f.compilerOutputLanguages) {
        if (!data.compilerOutputLanguages.includes(x)) {
          result = false;
        }
      }
      for (const x of f.compilerOptimizationStrategies) {
        if (!data.compilerOptimizationStrategies.includes(x)) {
          result = false;
        }
      }
      for (const x of f.knowledgeReuses) {
        if (!data.knowledgeReuses.includes(x)) {
          result = false;
        }
      }
      if (result && f.activeDevelopment != null && f.activeDevelopment !== data.activeDevelopment) {
        result = false;
      }
      for (const x of f.supportedQuantumCloudServices) {
        if (!data.supportedQuantumCloudServices.includes(x)) {
          result = false;
        }
      }
      if (result && f.localSimulator != null && f.localSimulator !== data.localSimulator) {
        result = false;
      }
      return result;
    };

    this.sdkFilterUpdateService.events$.subscribe(filterUpdateEvent => {
      this.sdkFilter = filterUpdateEvent;
      this.dataSource.filter = JSON.stringify(filterUpdateEvent);
    });
  }

  getActiveFilter(): Sdk {
    if (this.sdkFilter == null) {
      this.sdkFilterUpdateService.clear();
    }
    return this.sdkFilter;
  }

  licensesClicked(license: string): void {
    this.sdkFilterUpdateService.toggleLicense(license);
  }

  programmingLanguageClicked(language: string): void {
    this.sdkFilterUpdateService.toggleProgrammingLanguage(language);
  }

  compilerInputLanguageClicked(compilerInputLanguage: string): void {
    this.sdkFilterUpdateService.toggleCompilerInputLanguage(compilerInputLanguage);
  }

  compilerOutputLanguageClicked(compilerOutputLanguage: string): void {
    this.sdkFilterUpdateService.toggleCompilerOutputLanguage(compilerOutputLanguage);
  }

  compilerOptimizationStrategyClicked(compilerOptimizationStrategy: string): void {
    this.sdkFilterUpdateService.toggleCompilerOptimizationStrategy(compilerOptimizationStrategy);
  }

  knowledgeReuseClicked(knowledgeReuse: string): void {
    this.sdkFilterUpdateService.toggleKnowledgeReuse(knowledgeReuse);
  }

  activeDevelopmentClicked(activeDevelopment: boolean): void {
    this.sdkFilterUpdateService.toggleActiveDevelopment(activeDevelopment);
  }

  supportedQuantumCloudServiceClicked(supportedQuantumCloudService: string): void {
    this.sdkFilterUpdateService.toggleSupportedQuantumCloudServices(supportedQuantumCloudService);
  }

  localSimulatorClicked(localSimulator: boolean): void {
    this.sdkFilterUpdateService.toggleLocalSimulator(localSimulator);
  }
}
