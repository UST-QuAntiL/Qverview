import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SdkService } from '../sdk.service';
import { SdkFilterUpdateService } from '../sdk-filter/sdk-filter-update.service';
import { Sdk } from '../sdk.model';
import { QcsFilterUpdateService } from '../../quantum-cloud-service/qcs-filter/qcs-filter-update.service';

@Component({
  selector: 'app-sdks-table',
  templateUrl: './sdks-table.component.html',
  styleUrls: [  '../../app.component.scss', './sdks-table.component.scss' ]
})
export class SdksTableComponent implements OnInit {

  dataSource;
  private sdkFilter: Sdk;

  constructor(private sdkService: SdkService, private sdkFilterUpdateService: SdkFilterUpdateService, private qcsFilterUpdateService: QcsFilterUpdateService) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.sdkService.getSdks());
    this.dataSource.filterPredicate = (data, filter: Sdk) => {
      return SdkFilterUpdateService.isActive(data, filter);
    };

    this.sdkFilterUpdateService.events$.subscribe(filterUpdateEvent => {
      this.sdkFilter = filterUpdateEvent;
      this.dataSource.filter = filterUpdateEvent;
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

  activeDevelopmentClicked(activeDevelopment: boolean): void {
    this.sdkFilterUpdateService.toggleActiveDevelopment(activeDevelopment);
  }

  supportedQuantumCloudServiceClicked(supportedQuantumCloudService: string): void {
    this.sdkFilterUpdateService.toggleSupportedQuantumCloudServices(supportedQuantumCloudService);
    this.qcsFilterUpdateService.toggleName(supportedQuantumCloudService);
  }

  localSimulatorClicked(localSimulator: boolean): void {
    this.sdkFilterUpdateService.toggleLocalSimulator(localSimulator);
  }
}
