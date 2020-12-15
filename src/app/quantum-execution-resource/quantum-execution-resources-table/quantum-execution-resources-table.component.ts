import { Component, OnInit } from '@angular/core';
import { QuantumExecutionResourceService } from '../quantum-execution-resource.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-quantum-computation-resources-table',
  templateUrl: './quantum-execution-resources-table.component.html',
  styleUrls: [  '../../app.component.scss', './quantum-execution-resources-table.component.scss' ]
})
export class QuantumExecutionResourcesTableComponent implements OnInit {

  dataSource;
  displayedColumns = [
    'name',
    'type',
    'computationModel',
    'vendor'
  ];

  constructor(private qcrS: QuantumExecutionResourceService) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.qcrS.getQuantumComputationResource());
  }

}
