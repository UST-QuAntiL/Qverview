import { Component, OnInit } from '@angular/core';
import { QuantumCloudService} from '../quantum-cloud-service.model';
import { QcsFilterUpdateService} from './qcs-filter-update.service';

@Component({
  selector: 'app-qcs-filter',
  templateUrl: './qcs-filter.component.html',
  styleUrls: [ '../../app.component.scss', './qcs-filter.component.scss' ]
})
export class QcsFilterComponent implements OnInit {

  qcsFilter: QuantumCloudService;

  constructor(private qcsFilterUpdateService: QcsFilterUpdateService) { }

  ngOnInit(): void {
    this.qcsFilterUpdateService.events$.subscribe(filterUpdateEvent => {
      this.qcsFilter = filterUpdateEvent;
    });
    this.clear();
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

  clear(): void {
    this.qcsFilterUpdateService.clear();
  }
}
