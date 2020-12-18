import { Component, OnInit } from '@angular/core';
import { QuantumExecutionResourceService } from '../quantum-execution-resource.service';
import { MatTableDataSource } from '@angular/material/table';
import { FilterService } from '../../filter/filter.service';

@Component({
  selector: 'app-quantum-computation-resources-table',
  templateUrl: './quantum-execution-resources-table.component.html',
  styleUrls: ['../../app.component.scss', './quantum-execution-resources-table.component.scss']
})
export class QuantumExecutionResourcesTableComponent implements OnInit {

  dataSource;
  displayedColumns = [
    'name',
    'executionType',
    'computationModel',
    'vendor'
  ];

  constructor(private quantumExecutionResourceService: QuantumExecutionResourceService, private filterService: FilterService) {
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.quantumExecutionResourceService.getAllQuantumExecutionResources());
    this.filterService.qerFilterEvent$.subscribe(qer => this.dataSource = qer);
  }

  nameClicked(name: string): void {
    // this.filterService.toggleQuantumExecutionResource(name);
  }

  typeClicked(type: string): void {
    // this.filterService.toggleResourceType(type);
  }

  computationModelClicked(computationModel: string): void {
    // this.filterService.toggleComputationModel(computationModel);
  }

  vendorClicked(vendor: string): void {
    // this.filterService.toggleVendor(vendor);
  }
}
