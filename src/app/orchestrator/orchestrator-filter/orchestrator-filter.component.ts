import { Component, OnInit } from '@angular/core';
import { Orchestrator} from '../orchestrator.model';
import { OrchestratorFilterUpdateService} from './orchestrator-filter-update.service';

@Component({
  selector: 'app-orchestrator-filter',
  templateUrl: './orchestrator-filter.component.html',
  styleUrls: ['./orchestrator-filter.component.scss']
})
export class OrchestratorFilterComponent implements OnInit {

  orchestratorFilter: Orchestrator;

  constructor(private orchestratorFilterUpdateService: OrchestratorFilterUpdateService) { }

  ngOnInit(): void {
    this.orchestratorFilterUpdateService.event$.subscribe(filterUpdateEvent => {
      this.orchestratorFilter = filterUpdateEvent;
    });
    this.clear();
  }

  licenseClicked(license: string): void {
    this.orchestratorFilterUpdateService.toggleLicense(license);
  }

  clear(): void {
    this.orchestratorFilterUpdateService.clear();
  }

}
