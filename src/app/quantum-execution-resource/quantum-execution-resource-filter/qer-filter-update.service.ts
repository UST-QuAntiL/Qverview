import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { QuantumExecutionResource } from '../quantum-execution-resource.model';

@Injectable({
  providedIn: 'root'
})
export class QerFilterUpdateService {

  private subject = new Subject<QuantumExecutionResource>();
  private qerFilter: QuantumExecutionResource;

  constructor() { }

  static isActive(qer: QuantumExecutionResource, qerFilter: QuantumExecutionResource): boolean {
    let result = true;
    if (qerFilter.name !== '' && qerFilter.name !== qer.name) {
      result = false;
    }
    if (qerFilter.type !== '' && qerFilter.type !== qer.type) {
      result = false;
    }
    if (qerFilter.computationModel !== '' && qerFilter.computationModel !== qer.computationModel) {
      result = false;
    }
    if (qerFilter.vendor !== '' && qerFilter.vendor !== qer.vendor) {
      result = false;
    }
    return result;
  }

  private updateFilter(): void {
    this.subject.next(this.qerFilter);
  }

  get events$(): Observable<QuantumExecutionResource> {
    return this.subject.asObservable();
  }

  toggleName(name: string): void {
    if (this.qerFilter.name === '') {
      this.qerFilter.name = name;
    } else {
      this.qerFilter.name = '';
    }
    this.updateFilter();
  }

  toggleType(type: string): void {
    if (this.qerFilter.type === '') {
      this.qerFilter.type = type;
    } else {
      this.qerFilter.type = '';
    }
    this.updateFilter();
  }

  toggleComputationModel(computationModel: string): void {
    if (this.qerFilter.computationModel === '') {
      this.qerFilter.computationModel = computationModel;
    } else {
      this.qerFilter.computationModel = '';
    }
    this.updateFilter();
  }

  toggleVendor(vendor: string): void {
    if (this.qerFilter.vendor === '') {
      this.qerFilter.vendor = vendor;
    } else {
      this.qerFilter.vendor = '';
    }
    this.updateFilter();
  }

  clear(): void {
    this.qerFilter = {
      name: '',
      type: '',
      computationModel: '',
      vendor: '',
    };
    this.updateFilter();
  }
}
