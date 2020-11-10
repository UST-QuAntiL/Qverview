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
      knowlegdeReuses: ['libraries'],
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
      compilerOptimizationStrategies: ['hardware-dependent'],
      knowlegdeReuses: ['libraries'],
      activeDevelopment: true,
      supportedQuantumCloudServices: ['IBM Quantum', 'D-Wave'],
      localSimulator: true
    },
    {
      name: 'Forest',
      licenses: ['Apache2.0'],
      programmingLanguages: ['Python'],
      compilerInputLanguages: ['QUIL', 'OpenQASM'],
      compilerOutputLanguages: ['OpenQASM'],
      compilerOptimizationStrategies: ['hardware-dependent'],
      knowlegdeReuses: ['libraries'],
      activeDevelopment: true,
      supportedQuantumCloudServices: [],
      localSimulator: true
    },
  ];

  constructor() { }

  getSdks(): Sdk[] {
    return this.sdks;
  }

}
