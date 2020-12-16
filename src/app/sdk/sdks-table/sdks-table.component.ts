import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SdkService } from '../sdk.service';
import { Sdk } from '../sdk.model';
import { FilterService } from '../../filter/filter.service';

@Component({
  selector: 'app-sdks-table',
  templateUrl: './sdks-table.component.html',
  styleUrls: ['../../app.component.scss', './sdks-table.component.scss']
})
export class SdksTableComponent implements OnInit {

  dataSource;
  private sdkFilter: Sdk;

  constructor(private sdkService: SdkService, private filterService: FilterService) {
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.sdkService.getSdks());

    this.filterService.events$.subscribe(filter => {
      this.dataSource = new MatTableDataSource(this.sdkService.getActiveSdks());
    });
  }

  nameClicked(name: any): void {
    this.filterService.toggleSdk(name);
  }

  licensesClicked(license: string): void {
    this.filterService.toggleLicense(license);
  }

  programmingLanguageClicked(language: string): void {
    this.filterService.toggleProgrammingLanguage(language);
  }

  compilerInputLanguageClicked(compilerInputLanguage: string): void {
    this.filterService.toggleAssemblyLanguage(compilerInputLanguage);
  }

  compilerOutputLanguageClicked(compilerOutputLanguage: string): void {
    this.filterService.toggleAssemblyLanguage(compilerOutputLanguage);
  }

  compilerOptimizationStrategyClicked(compilerOptimizationStrategy: string): void {
    this.filterService.toggleOptimizationStrategy(compilerOptimizationStrategy);
  }

  activeDevelopmentClicked(activeDevelopment: string): void {
    this.filterService.toggleActiveDevelopment(activeDevelopment);
  }

  supportedQuantumCloudServiceClicked(supportedQuantumCloudService: string): void {
    this.filterService.toggleQuantumCloudService(supportedQuantumCloudService);
  }

  localSimulatorClicked(localSimulator: string): void {
    this.filterService.toggleLocalSimulator(localSimulator);
  }
}
