import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Orchestrator } from '../orchestrator.model';

@Injectable({
  providedIn: 'root'
})
export class OrchestratorFilterUpdateService {

  private subject = new Subject<any>();
  private orchestratorFilter: Orchestrator;

  constructor() { }

  private updateFilter(): void {
    this.subject.next(this.orchestratorFilter);
  }

  get event$(): Observable<any> {
    return this.subject.asObservable();
  }
}
