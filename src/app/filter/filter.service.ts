import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Sdk } from '../sdk/sdk.model';
import { QuantumCloudService } from '../quantum-cloud-service/quantum-cloud-service.model';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  private sdkFilterSubject = new Subject<Sdk[]>();
  private qcsFilterSubject = new Subject<QuantumCloudService[]>();

  constructor() {
  }

  get sdkFilterEvent$(): Observable<Sdk[]> {
    return this.sdkFilterSubject.asObservable();
  }

  setSdkFilter(sdkFilterModel: Sdk[]): void {
    this.sdkFilterSubject.next(sdkFilterModel);
  }

  get qcsFilterEvent$(): Observable<QuantumCloudService[]> {
    return this.qcsFilterSubject.asObservable();
  }

  setQcsFilter(filteredQcs: QuantumCloudService[]): void {
    this.qcsFilterSubject.next(filteredQcs);
  }
}
