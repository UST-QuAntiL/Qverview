import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { Sdk } from '../sdk.model';
import { SdkService } from '../sdk.service';

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

  constructor(sdkService: SdkService) {
    this.dataSource = new MatTableDataSource(sdkService.getSdks());
  }

  ngOnInit(): void {
  }

}
