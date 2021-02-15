import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Sdk } from '../sdk/sdk.model';
import { QuantumCloudService } from '../quantum-cloud-service/quantum-cloud-service.model';
import { QuantumExecutionResource } from '../quantum-execution-resource/quantum-execution-resource.model';
import { ProgrammingLanguage } from '../programming-language/programming-language.model';
import { Compiler } from '../compiler/compiler.model';
import { Orchestrator } from '../orchestrator/orchestrator.model';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  private sdkFilterSubject = new Subject<Sdk[]>();
  private qcsFilterSubject = new Subject<QuantumCloudService[]>();
  private qerFilterSubject = new Subject<QuantumExecutionResource[]>();
  private syncSdkQcsSubject = new Subject<boolean>();
  private syncQcsQerSubject = new Subject<boolean>();
  private qplFilterSubject = new Subject<ProgrammingLanguage[]>();
  private compilerFilterSubject = new Subject<Compiler[]>();
  private orchestratorFilterSubject = new Subject<Orchestrator[]>();
  private searchSubject = new Subject<string>();

  constructor() {
  }

  get sdkFilterEvent$(): Observable<Sdk[]> {
    return this.sdkFilterSubject.asObservable();
  }

  setSdkFilter(filteredSdks: Sdk[]): void {
    this.sdkFilterSubject.next(filteredSdks);
  }

  get qcsFilterEvent$(): Observable<QuantumCloudService[]> {
    return this.qcsFilterSubject.asObservable();
  }

  setQcsFilter(filteredQcs: QuantumCloudService[]): void {
    this.qcsFilterSubject.next(filteredQcs);
  }

  get qerFilterEvent$(): Observable<QuantumExecutionResource[]> {
    return this.qerFilterSubject.asObservable();
  }

  setQerFilter(filteredQers: QuantumExecutionResource[]): void {
    this.qerFilterSubject.next(filteredQers);
  }

  get syncSdkQcsEvent$(): Observable<boolean> {
    return this.syncSdkQcsSubject.asObservable();
  }

  setSyncSdkQcs(value: boolean): void {
    this.syncSdkQcsSubject.next(value);
  }

  get syncQcsQerEvent$(): Observable<boolean> {
    return this.syncQcsQerSubject.asObservable();
  }

  setSyncQcsQer(value: boolean): void {
    this.syncQcsQerSubject.next(value);
  }

  get qplFilterEvent$(): Observable<ProgrammingLanguage[]> {
    return this.qplFilterSubject.asObservable();
  }

  setQplFilter(filteredQpls: ProgrammingLanguage[]): void {
    this.qplFilterSubject.next(filteredQpls);
  }

  get compilerFilterEvent$(): Observable<Compiler[]> {
    return this.compilerFilterSubject.asObservable();
  }

  setCompilerFilter(filteredCompilers: Compiler[]): void {
    this.compilerFilterSubject.next(filteredCompilers);
  }

  get orchestratorFilterEvent$(): Observable<Orchestrator[]> {
    return this.orchestratorFilterSubject.asObservable();
}

  setOrchestratorFilter(filteredOrchestrators: Orchestrator[]): void {
    this.orchestratorFilterSubject.next(filteredOrchestrators);
  }

  search(filterValue: string): void {
    this.searchSubject.next(filterValue);
  }

  get searchEvent$(): Observable<string> {
    return this.searchSubject.asObservable();
  }
}
