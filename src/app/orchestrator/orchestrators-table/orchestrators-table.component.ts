import { Component, OnInit } from '@angular/core';
import { OrchestratorService } from '../orchestrator.service';
import { MatTableDataSource } from '@angular/material/table';
import { Orchestrator } from '../orchestrator.model';
import { FilterService } from '../../filter/filter.service';

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

  constructor(private orchestratorService: OrchestratorService, private filterService: FilterService) {
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Orchestrator>(this.orchestratorService.getAllOrchestrators());

    this.filterService.orchestratorFilterEvent$.subscribe(filter => {
      this.dataSource = new MatTableDataSource(filter);
    });

    this.filterService.searchEvent$.subscribe(value => {
      this.dataSource.filter = value;
    });
  }
}
