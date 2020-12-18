import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Sdk } from '../sdk/sdk.model';
import { QuantumCloudService } from '../quantum-cloud-service/quantum-cloud-service.model';
import { QuantumExecutionResource } from '../quantum-execution-resource/quantum-execution-resource.model';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  private sdkFilterSubject = new Subject<Sdk[]>();
  private qcsFilterSubject = new Subject<QuantumCloudService[]>();
  private qerFilterSubject = new Subject<QuantumExecutionResource[]>();

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
}
