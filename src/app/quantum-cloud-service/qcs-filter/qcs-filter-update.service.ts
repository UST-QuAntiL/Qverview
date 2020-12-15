import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { QuantumCloudService } from '../quantum-cloud-service.model';

@Injectable({
  providedIn: 'root'
})
export class QcsFilterUpdateService {

  private subject = new Subject<QuantumCloudService>();
  private qcsFilter: QuantumCloudService;

  constructor() { }

  static isActive(qcs: QuantumCloudService, filter: QuantumCloudService): boolean {
    let result = true;
    if (filter.name !== '' && qcs.name !== filter.name) {
      result = false;
    }
    for (const x of filter.accessMethods) {
      if (!qcs.accessMethods.includes(x)) {
        result = false;
      }
    }
    if (filter.serviceModel !== '' && qcs.serviceModel !== filter.serviceModel) {
      result = false;
    }
    for (const x of filter.resources) {
      if (!qcs.resources.includes(x)) {
        result = false;
      }
    }
    for (const x of filter.assemblyLanguages) {
      if (!qcs.assemblyLanguages.includes(x)) {
        result = false;
      }
    }
    return result;
  }

  private updateFilter(): void {
    this.subject.next(this.qcsFilter);
  }

  get events$(): Observable<QuantumCloudService> {
    return this.subject.asObservable();
  }

  toggleName(name: string): void {
    if (this.qcsFilter.name === '') {
      this.qcsFilter.name = name;
    } else {
      this.qcsFilter.name = '';
    }
    this.updateFilter();
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
    const index = this.qcsFilter.assemblyLanguages.indexOf(assemblyLanguage, 0);
    if (index >= 0) {
      this.qcsFilter.assemblyLanguages.splice(index, 1);
    } else {
      this.qcsFilter.assemblyLanguages.push(assemblyLanguage);
    }
    this.updateFilter();
  }

  clear(): void {
    this.qcsFilter = {
      name: '',
      accessMethods: [],
      serviceModel: '',
      resources: [],
      assemblyLanguages: []
    };
    this.updateFilter();
  }
}
