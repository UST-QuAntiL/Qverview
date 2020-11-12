import { Component, OnInit } from '@angular/core';
import { QcsService } from '../qcs.service';
import { MatTableDataSource } from '@angular/material/table';
import { QcsFilterUpdateService } from '../qcs-filter/qcs-filter-update.service';
import { QuantumCloudService } from '../quantum-cloud-service.model';

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
  private qcsFilter: QuantumCloudService;

  constructor(private qcsService: QcsService, private qcsFilterUpdateService: QcsFilterUpdateService) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.qcsService.getQcs());
    this.dataSource.filterPredicate = (data, filter: QuantumCloudService) => {
      return QcsFilterUpdateService.isActive(data, filter);
    };

    this.qcsFilterUpdateService.events$.subscribe(filterUpdateEvent => {
      this.qcsFilter = filterUpdateEvent;
      this.dataSource.filter = filterUpdateEvent;
    });
  }

  getActiveFilter(): QuantumCloudService {
    if (this.qcsFilter == null) {
      this.qcsFilterUpdateService.clear();
    }
    return this.qcsFilter;
  }

  accessMethodClicked(accessMethod: string): void {
    this.qcsFilterUpdateService.toggleAccessMethod(accessMethod);
  }

  serviceModelClicked(serviceModel: string): void {
    this.qcsFilterUpdateService.toggleServiceModel(serviceModel);
  }

  resourceClicked(resource: string): void {
    this.qcsFilterUpdateService.toggleResource(resource);
  }

  assemblyLanguageClicked(assemblyLanguage: string): void {
    this.qcsFilterUpdateService.toggleAssemblyLanguage(assemblyLanguage);
  }

}
