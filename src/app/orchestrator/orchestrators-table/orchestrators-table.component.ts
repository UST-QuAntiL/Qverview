import { Component, OnInit } from '@angular/core';
import { OrchestratorService} from '../orchestrator.service';
import { MatTableDataSource } from '@angular/material/table';
import { Orchestrator } from '../orchestrator.model';

@Component({
  selector: 'app-orchestrators-table',
  templateUrl: './orchestrators-table.component.html',
  styleUrls: ['../../app.component.scss', './orchestrators-table.component.scss']
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

  constructor(private orchestratorService: OrchestratorService) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.orchestratorService.getOrchestrators());

  }


  licenseClicked(license: string): void {
  }

  prorammingLanguageClicked(prorammingLanguage: string): void {
  }

  activeDevelopmentClicked(activeDevelopment: boolean): void {
  }

  productionReadyClicked(productionReady: boolean): void {
  }
}
