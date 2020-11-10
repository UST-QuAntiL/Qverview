import { Injectable } from '@angular/core';
import { QuantumCloudService } from './quantum-cloud-service.model';

@Injectable({
  providedIn: 'root'
})
export class QcsService {

  qcs: QuantumCloudService[] = [
    {
      name: 'IBM Quantum',
      accessMethods: ['SDK', 'GUI', 'REST'],
      serviceModel: 'QCaaS',
      resources: ['IBM'],
      assemblyLanguage: 'OpenQASM'
    },
    {
      name: 'AWS Braket',
      accessMethods: ['SDK', 'CLI', 'REST', 'GUI?'],
      serviceModel: 'QCaaS',
      resources: ['IBM', 'IonQ'],
      assemblyLanguage: '-'
    }
  ];

  constructor() { }

  getQcs(): QuantumCloudService[] {
    return this.qcs;
  }
}
