import { Injectable } from '@angular/core';
import { QuantumComputationResource } from './quantum-computation-resource.model';

@Injectable({
  providedIn: 'root'
})
export class QuantumComputationResourceService {

  quantumComputationResources: QuantumComputationResource[] = [
    {
      name: 'Yorktown',
      type: 'QPU',
      computationModel: 'Circuit-Model',
      vendor: 'IBM'
    },
    {
      name: 'Santiago',
      type: 'QPU',
      computationModel: 'Circuit-Model',
      vendor: 'IBM'
    },
    {
      name: 'Athens',
      type: 'QPU',
      computationModel: 'Circuit-Model',
      vendor: 'IBM'
    },
    {
      name: 'Valencia',
      type: 'QPU',
      computationModel: 'Circuit-Model',
      vendor: 'IBM'
    },
    {
      name: 'Vigo',
      type: 'QPU',
      computationModel: 'Circuit-Model',
      vendor: 'IBM'
    },
    {
      name: 'Melbourne',
      type: 'QPU',
      computationModel: 'Circuit-Model',
      vendor: 'IBM'
    },
    {
      name: 'Ourense',
      type: 'QPU',
      computationModel: 'Circuit-Model',
      vendor: 'IBM'
    },
    {
      name: 'Yorktown',
      type: 'QPU',
      computationModel: 'Circuit-Model',
      vendor: 'IBM'
    },
    {
      name: 'Armonk',
      type: 'QPU',
      computationModel: 'Circuit-Model',
      vendor: 'IBM'
    },
    {
      name: 'QASM Simulator',
      type: 'Simulator',
      computationModel: 'Circuit-Model',
      vendor: 'IBM'
    },
  ];

  constructor() { }

  getQuantumComputationResource(): QuantumComputationResource[] {
    return this.quantumComputationResources;
  }
}
