import { Component, OnInit } from '@angular/core';
import { QuantumComputationResourceService } from '../quantum-computation-resource.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-quantum-computation-resources-table',
  templateUrl: './quantum-computation-resources-table.component.html',
  styleUrls: ['./quantum-computation-resources-table.component.scss']
})
export class QuantumComputationResourcesTableComponent implements OnInit {

  dataSource;
  displayedColumns = [
    'name',
    'type',
    'computationModel',
    'vendor'
  ];

  constructor(private qcrS: QuantumComputationResourceService) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.qcrS.getQuantumComputationResource());
  }

}
