import { Component, OnInit } from '@angular/core';
import { QcsService } from '../qcs.service';
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: 'app-quantum-cloud-services-table',
  templateUrl: './quantum-cloud-services-table.component.html',
  styleUrls: ['./quantum-cloud-services-table.component.scss']
})
export class QuantumCloudServicesTableComponent implements OnInit {

  dataSource;
  displayedColumns = [
    'name',
    'accessMethods',
    'serviceModel',
    'resources',
    'assemblyLanguage'
  ];

  constructor(qcsService: QcsService) {
    this.dataSource = new MatTableDataSource(qcsService.getQcs());
  }

  ngOnInit(): void {
  }

}
