import { Injectable } from '@angular/core';
import { Sdk } from './sdk.model';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SdkService {

  sdks: Sdk[] = [
    {
      name: 'Qiskit',
      licenses: ['Apache2.0'],
      programmingLanguages: ['JavaScript', 'Python'],
      compilerInputLanguages: ['OpenQASM'],
      compilerOutputLanguages: ['OpenQASM'],
      compilerOptimizationStrategies: ['hardware-dependent'],
      knowledgeReuses: ['libraries', 'jupyter'],
      activeDevelopment: true,
      supportedQuantumCloudServices: ['IBM Quantum'],
      localSimulator: true
    },
    {
      name: 'XACC',
      licenses: ['EPL'],
      programmingLanguages: ['C++', 'Python'],
      compilerInputLanguages: [],
      compilerOutputLanguages: ['OpenQASM'],
      compilerOptimizationStrategies: ['no optimization'],
      knowledgeReuses: ['libraries'],
      activeDevelopment: true,
      supportedQuantumCloudServices: ['IBM Quantum', 'D-Wave'],
      localSimulator: true
    },
    {
      name: 'Forest',
      licenses: ['Apache2.0'],
      programmingLanguages: ['Python'],
      compilerInputLanguages: ['QUIL', 'OpenQASM'],
      compilerOutputLanguages: ['QUIL'],
      compilerOptimizationStrategies: ['hardware-dependent'],
      knowledgeReuses: ['libraries'],
      activeDevelopment: true,
      supportedQuantumCloudServices: [],
      localSimulator: false
    },
    {
      name: 'Liqui|>',
      licenses: ['Custom'],
      programmingLanguages: ['F#'],
      compilerInputLanguages: ['Custom'],
      compilerOutputLanguages: [],
      compilerOptimizationStrategies: ['hardware-dependent'],
      knowledgeReuses: ['libraries'],
      activeDevelopment: false,
      supportedQuantumCloudServices: [],
      localSimulator: true
    },
  ];

  constructor() { }

  getSdks(): Sdk[] {
    return this.sdks;
  }

}
