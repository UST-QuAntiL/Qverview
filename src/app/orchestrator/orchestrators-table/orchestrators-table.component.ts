import { Component, OnInit } from '@angular/core';
import { OrchestratorService} from '../orchestrator.service';
import { MatTableDataSource } from '@angular/material/table';
import { OrchestratorFilterUpdateService } from '../orchestrator-filter/orchestrator-filter-update.service';
import { Orchestrator } from '../orchestrator.model';
import { Sdk } from '../../sdk/sdk.model';

@Component({
  selector: 'app-orchestrators-table',
  templateUrl: './orchestrators-table.component.html',
  styleUrls: ['./orchestrators-table.component.scss']
})
export class OrchestratorsTableComponent implements OnInit {

  dataSource;
  displayedColumns = [
    'name',
    'licenses',
    'programmingLanguages',
    'activeDevelopment',
    'productionReady'
  ];
  private orchestratorFilter: Orchestrator;

  constructor(private orchestratorService: OrchestratorService, private orchestratorFilterUpdateService: OrchestratorFilterUpdateService) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.orchestratorService.getOrchestrators());
    this.dataSource.filterPredicate = (data, filter: string) => {
      return OrchestratorFilterUpdateService.isActive(data, JSON.parse(filter));
    };

    this.orchestratorFilterUpdateService.event$.subscribe(filterUpdateEvent => {
      this.orchestratorFilter = filterUpdateEvent;
      this.dataSource.filter = JSON.stringify(filterUpdateEvent);
    });
  }

  getActiveFilter(): Orchestrator {
    if (this.orchestratorFilter == null) {
      this.orchestratorFilterUpdateService.clear();
    }
    return this.orchestratorFilter;
  }

  licenseClicked(license: string): void {
    this.orchestratorFilterUpdateService.toggleLicense(license);
  }

  prorammingLanguageClicked(prorammingLanguage: string): void {
    this.orchestratorFilterUpdateService.toggleProgrammingLanguage(prorammingLanguage);
  }

  activeDevelopmentClicked(activeDevelopment: boolean): void {
    this.orchestratorFilterUpdateService.toggleActiveDevelopment(activeDevelopment);
  }

  productionReadyClicked(productionReady: boolean): void {
    this.orchestratorFilterUpdateService.toggleProductionReady(productionReady);
  }
}
