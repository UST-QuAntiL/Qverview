import { Injectable } from '@angular/core';
import { Sdk } from './sdk.model';
// @ts-ignore
import myData from '../../../data/SoftwareDevelopmentKits.json';

@Injectable({
  providedIn: 'root'
})
export class SdkService {

  sdks: Sdk[] = myData;

  constructor() { }

  getSdks(): Sdk[] {
    return this.sdks;
  }

}
