import { Component, OnInit } from '@angular/core';
import { QcsService } from '../qcs.service';
import { MatTableDataSource } from '@angular/material/table';

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

  constructor(private qcsService: QcsService) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.qcsService.getQcs());
  }

}
