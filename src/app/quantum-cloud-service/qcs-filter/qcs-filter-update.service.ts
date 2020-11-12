import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { QuantumCloudService } from '../quantum-cloud-service.model';

@Injectable({
  providedIn: 'root'
})
export class QcsFilterUpdateService {

  private subject = new Subject<any>();
  private qcsFilter: QuantumCloudService;

  constructor() { }

  static isActive(qcs: QuantumCloudService, qcsFilter: QuantumCloudService): boolean {
    let result = true;
    for (const x of qcsFilter.accessMethods) {
      if (!qcs.accessMethods.includes(x)) {
        result = false;
      }
    }
    if (result && qcsFilter.serviceModel !== '' &&
      qcsFilter.serviceModel !== qcsFilter.serviceModel) {
      result = false;
    }
    for (const x of qcsFilter.resources) {
      if (!qcs.resources.includes(x)) {
        result = false;
      }
    }
    if (result && qcsFilter.assemblyLanguage !== '' &&
      qcsFilter.assemblyLanguage !== qcsFilter.assemblyLanguage) {
      result = false;
    }
    return result;
  }

  private updateFilter(): void {
    this.subject.next(this.qcsFilter);
  }

  get events$(): Observable<any> {
    return this.subject.asObservable();
  }

  toggleAccessMethod(accessMethod: string): void {
    const index = this.qcsFilter.accessMethods.indexOf(accessMethod, 0);
    if (index >= 0) {
      this.qcsFilter.accessMethods.splice(index, 1);
    } else {
      this.qcsFilter.accessMethods.push(accessMethod);
    }
    this.updateFilter();
  }

  toggleServiceModel(serviceModel: string): void {
    if (this.qcsFilter.serviceModel === '') {
      this.qcsFilter.serviceModel = serviceModel;
    } else {
      this.qcsFilter.serviceModel = '';
    }
    this.updateFilter();
  }

  toggleResource(resource: string): void {
    const index = this.qcsFilter.resources.indexOf(resource, 0);
    if (index >= 0) {
      this.qcsFilter.resources.splice(index, 1);
    } else {
      this.qcsFilter.resources.push(resource);
    }
    this.updateFilter();
  }

  toggleAssemblyLanguage(assemblyLanguage: string): void {
    if (this.qcsFilter.assemblyLanguage === '') {
      this.qcsFilter.assemblyLanguage = assemblyLanguage;
    } else {
      this.qcsFilter.assemblyLanguage = '';
    }
    this.updateFilter();
  }

  clear(): void {
    this.qcsFilter = {
      name: '',
      accessMethods: [],
      serviceModel: '',
      resources: [],
      assemblyLanguage: ''
    };
    this.updateFilter();
  }
}
