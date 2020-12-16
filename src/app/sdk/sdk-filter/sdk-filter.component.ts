import { Component, OnInit } from '@angular/core';
import { SdkFilterUpdateService } from './sdk-filter-update.service';
import { Sdk } from '../sdk.model';

@Component({
  selector: 'app-sdk-filter',
  templateUrl: './sdk-filter.component.html',
  styleUrls: [  '../../app.component.scss', './sdk-filter.component.scss' ]
})
export class SdkFilterComponent implements OnInit {

  sdkFilter: Sdk;

  constructor(private sdkFilterUpdateService: SdkFilterUpdateService) { }

  ngOnInit(): void {
    this.sdkFilterUpdateService.events$.subscribe(filterUpdateEvent => {
      this.sdkFilter = filterUpdateEvent;
    });
    this.clear();
  }

  licenseClicked(license: string): void {
    this.sdkFilterUpdateService.toggleLicense(license);
  }

  prorammingLanguageClicked(programmingLanguage: string): void {
    this.sdkFilterUpdateService.toggleProgrammingLanguage(programmingLanguage);
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

  activeDevelopmentClicked(activeDevelopment: boolean): void {
    this.sdkFilterUpdateService.toggleActiveDevelopment(activeDevelopment);
  }

  supportedQuantumCloudServiceClicked(supportedQuantumCloudService: string): void {
    this.sdkFilterUpdateService.toggleSupportedQuantumCloudServices(supportedQuantumCloudService);
  }

  localSimulatorClicked(localSimulator: boolean): void {
    this.sdkFilterUpdateService.toggleLocalSimulator(localSimulator);
  }

  clear(): void {
    this.sdkFilterUpdateService.clear();
  }
}
