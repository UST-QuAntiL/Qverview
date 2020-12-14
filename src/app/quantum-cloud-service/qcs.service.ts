import { Injectable } from '@angular/core';
import { QuantumCloudService } from './quantum-cloud-service.model';
// @ts-ignore
import cloudServicesJson from '../../../data/CloudServices.json';

@Injectable({
  providedIn: 'root'
})
export class QcsService {

  qcs: QuantumCloudService[] = cloudServicesJson;

  constructor() { }

  getQcs(): QuantumCloudService[] {
    return this.qcs;
  }
}
