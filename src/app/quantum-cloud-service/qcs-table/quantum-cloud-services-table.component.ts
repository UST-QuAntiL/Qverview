import { Component, OnInit } from '@angular/core';
import { QcsService } from '../qcs.service';
import { MatTableDataSource } from '@angular/material/table';
import { QuantumCloudService } from '../quantum-cloud-service.model';
import { QuantumExecutionResourceService } from '../../quantum-execution-resource/quantum-execution-resource.service';
import { FilterService } from '../../filter/filter.service';

@Component({
  selector: 'app-quantum-cloud-services-table',
  templateUrl: './quantum-cloud-services-table.component.html',
  styleUrls: ['../../app.component.scss', './quantum-cloud-services-table.component.scss']
})
export class QuantumCloudServicesTableComponent implements OnInit {

  dataSource;
  displayedColumns = [
    'name',
    'accessMethods',
    'serviceModel',
    'resources',
    'assemblyLanguages'
  ];
  private qcsFilter: QuantumCloudService;

  constructor(private qcsService: QcsService, private qerService: QuantumExecutionResourceService, private filterService: FilterService) {
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.qcsService.getAllQuantumCloudServicesResources());

    this.filterService.qcsFilterEvent$.subscribe(filter => {
      this.dataSource = filter;
    });
  }

  nameClicked(name: string): void {
    // this.filterService.toggleQuantumCloudService(name);
  }

  accessMethodClicked(accessMethod: string): void {
    // this.filterService.toggleAccessMethod(accessMethod);
  }

  serviceModelClicked(serviceModel: string): void {
    // this.filterService.toggleServiceModel(serviceModel);
  }

  resourceClicked(resource: string): void {
    // this.filterService.toggleQuantumExecutionResource(resource);
  }

  assemblyLanguageClicked(assemblyLanguage: string): void {
    // this.filterService.toggleAssemblyLanguage(assemblyLanguage);
  }
}
