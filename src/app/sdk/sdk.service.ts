import { Injectable } from '@angular/core';
import { Sdk } from './sdk.model';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SdkService {

  sdks: Sdk[] = [{
    name: 'Qiskit',
    licenses: ['Apache 2.0'],
    programmingLanguages: ['JavaScript', 'Python'],
    compilerInputLanguages: ['OpenQASM'],
    compilerOutputLanguages: ['OpenQASM'],
    compilerOptimizationStrategies: ['hardware-dependent'],
    knowlegdeReuses: ['libraries'],
    activeDevelopment: true,
    supportedQuantumCloudServices: ['IBM Quantum'],
    localSimulator: true
  }];

  constructor() { }

  getSdks(): Sdk[] {
    return this.sdks;
  }

}
