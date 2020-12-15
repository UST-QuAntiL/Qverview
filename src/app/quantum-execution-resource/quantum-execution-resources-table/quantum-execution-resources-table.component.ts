import { Component, OnInit } from '@angular/core';
import { QuantumExecutionResourceService } from '../quantum-execution-resource.service';
import { MatTableDataSource } from '@angular/material/table';
import { QerFilterUpdateService } from '../quantum-execution-resource-filter/qer-filter-update.service';
import { QuantumExecutionResource } from '../quantum-execution-resource.model';
import { QcsFilterUpdateService } from '../../quantum-cloud-service/qcs-filter/qcs-filter-update.service';

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
  private qerFilter: QuantumExecutionResource;

  constructor(private qcrS: QuantumExecutionResourceService, private qerFilterUpdateService: QerFilterUpdateService, private qcsFilterUpdateService: QcsFilterUpdateService) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.qcrS.getQuantumComputationResource());
    this.dataSource.filterPredicate = (data, filter: QuantumExecutionResource) => {
      return QerFilterUpdateService.isActive(data, filter);
    };

    this.qerFilterUpdateService.events$.subscribe(filterUpdateEvent => {
      this.qerFilter = filterUpdateEvent;
      this.dataSource.filter = filterUpdateEvent;
    });
  }

  getActiveFilter(): QuantumExecutionResource {
    if (this.qerFilter == null) {
      this.qerFilterUpdateService.clear();
    }
    return this.qerFilter;
  }

  nameClicked(name: string): void {
    this.qerFilterUpdateService.toggleName(name);
    this.qcsFilterUpdateService.toggleResource(name);
  }

  typeClicked(type: string): void {
    this.qerFilterUpdateService.toggleType(type);
  }

  computationModelClicked(computationModel: string): void {
    this.qerFilterUpdateService.toggleComputationModel(computationModel);
  }

  vendorClicked(vendor: string): void {
    this.qerFilterUpdateService.toggleVendor(vendor);
  }
}
