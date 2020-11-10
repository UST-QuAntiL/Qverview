import { Component, OnInit } from '@angular/core';
import { OrchestratorService} from '../orchestrator.service';
import { MatTableDataSource } from "@angular/material/table";

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

  constructor(private orchestratorService: OrchestratorService) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.orchestratorService.getOrchestrators());
  }

}
