import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { SdkService } from '../sdk.service';
import { FilterUpdateService } from '../../filter/filter-update.service';

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
    'knowlegdeReuses',
    'activeDevelopment',
    'supportedQuantumCloudServices',
    'localSimulator',
  ];

  constructor(private sdkService: SdkService, private filterUpdateService: FilterUpdateService) {
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.sdkService.getSdks());
    this.dataSource.filterPredicate = function (data, filter: string): boolean {
      var result = true;
      var f = JSON.parse(filter);
      for (let x of f.licenses) {
        if (!data.licenses.includes(x)) {
          result = false;
        }
      }
      for (let x of f.programmingLanguages) {
        if (!data.programmingLanguages.includes(x)) {
          result = false;
        }
      }
      return result;
    };

    this.filterUpdateService.events$.forEach(filterUpdateEvent => {
      this.dataSource.filter = JSON.stringify(filterUpdateEvent);
    });
  }

  licensesClicked(license: string) {
    this.filterUpdateService.toggleLicense(license);
  }

  programmingLanguageClicked(language: string) {
    this.filterUpdateService.toggleProgrammingLanguage(language);
  }
}
