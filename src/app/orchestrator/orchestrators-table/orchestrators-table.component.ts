import { Component, OnInit } from '@angular/core';
import { OrchestratorService} from '../orchestrator.service';
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

  constructor(private orchestratorService: OrchestratorService, private filterService: FilterService) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.orchestratorService.getAllOrchestrators());
    this.filterService.searchEvent$.subscribe(value => this.dataSource.filter = value);
  }


  prorammingLanguageClicked(prorammingLanguage: string): void {
    // this.filterService.toggleProgrammingLanguage(prorammingLanguage);
  }

  activeDevelopmentClicked(activeDevelopment: string): void {
    // this.filterService.toggleActiveDevelopment(activeDevelopment);
  }

  productionReadyClicked(productionReady: string): void {
    // this.filterService.toggleProductionReady(productionReady);
  }
}
