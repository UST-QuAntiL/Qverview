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
      return SdkFilterUpdateService.isActive(data, JSON.parse(filter));
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
