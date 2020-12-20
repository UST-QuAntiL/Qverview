import { Component, OnInit } from '@angular/core';
import { QcsService } from '../qcs.service';
import { MatTableDataSource } from '@angular/material/table';
import { QuantumExecutionResourceService } from '../../quantum-execution-resource/quantum-execution-resource.service';
import { FilterService } from '../../filter/filter.service';

@Component({
  selector: 'app-quantum-cloud-services-table',
  templateUrl: './quantum-cloud-services-table.component.html',
  styleUrls: ['../../app.component.scss', './quantum-cloud-services-table.component.scss']
})
export class QuantumCloudServicesTableComponent implements OnInit{

  dataSource;
  displayedColumns = [
    'name',
    'accessMethods',
    'serviceModel',
    'resources',
    'assemblyLanguages'
  ];

  constructor(private qcsService: QcsService, private qerService: QuantumExecutionResourceService, private filterService: FilterService) {
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.qcsService.getAllQuantumCloudServicesResources());

    this.filterService.qcsFilterEvent$.subscribe(filter => {
      this.dataSource = filter;
    });

    this.filterService.searchEvent$.subscribe(value => {
      this.dataSource.filter = value;
    });
  }
}
