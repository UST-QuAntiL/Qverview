import { Component, OnInit } from '@angular/core';
import { OrchestratorService} from '../orchestrator.service';
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: 'app-orchestrators-table',
  templateUrl: './orchestrators-table.component.html',
  styleUrls: ['./orchestrators-table.component.scss']
})
export class OrchestratorsTableComponent implements OnInit {

  orchestratorService: OrchestratorService;
  dataSource;
  displayedColumns = [
    'name',
    'licenses',
    'programmingLanguages',
    'activeDevelopment',
    'productionReady'
  ];

  constructor(orchestratorService: OrchestratorService) {
    this.orchestratorService = orchestratorService;
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.orchestratorService.getOrchestrators());
  }

}
