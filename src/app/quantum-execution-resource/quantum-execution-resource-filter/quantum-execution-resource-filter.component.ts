import { Component, OnInit } from '@angular/core';
import { QuantumExecutionResource } from '../quantum-execution-resource.model';
import { QerFilterUpdateService } from './qer-filter-update.service';
import { QcsFilterUpdateService } from '../../quantum-cloud-service/qcs-filter/qcs-filter-update.service';

@Component({
  selector: 'app-quantum-execution-resource-filter',
  templateUrl: './quantum-execution-resource-filter.component.html',
  styleUrls: [ '../../app.component.scss', './quantum-execution-resource-filter.component.scss']
})
export class QuantumExecutionResourceFilterComponent implements OnInit {

  qerFilter: QuantumExecutionResource;

  constructor(private qerFilterUpdateService: QerFilterUpdateService, private qcsFilterUpdateService: QcsFilterUpdateService) { }

  ngOnInit(): void {
    this.qerFilterUpdateService.events$.subscribe(filterUpdateEvent => {
      this.qerFilter = filterUpdateEvent;
    });
    this.clear();
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

  clear(): void {
    this.qerFilterUpdateService.clear();
  }
}
