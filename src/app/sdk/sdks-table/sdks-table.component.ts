import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SdkService } from '../sdk.service';
import { FilterUpdateService } from '../../filter/filter-update.service';
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

  constructor(private sdkService: SdkService, private filterUpdateService: FilterUpdateService) { }

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

    this.filterUpdateService.events$.forEach(filterUpdateEvent => {
      this.sdkFilter = filterUpdateEvent;
      this.dataSource.filter = JSON.stringify(filterUpdateEvent);
    });
  }

  getActiveFilter(): Sdk {
    if (this.sdkFilter == null) {
      this.filterUpdateService.clear();
    }
    return this.sdkFilter;
  }

  licensesClicked(license: string): void {
    this.filterUpdateService.toggleLicense(license);
  }

  programmingLanguageClicked(language: string): void {
    this.filterUpdateService.toggleProgrammingLanguage(language);
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
}
