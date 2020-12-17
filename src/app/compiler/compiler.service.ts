import { Injectable } from '@angular/core';
import { Compiler } from './compiler.model';
// @ts-ignore
import compilersAndTranspilersJson from '../../../data/CompilersAndTranspilers.json';
import { QuantumCloudService } from '../quantum-cloud-service/quantum-cloud-service.model';
import { FilterService } from '../filter/filter.service';

@Injectable({
  providedIn: 'root'
})
export class CompilerService {

  compilers: Compiler[] = compilersAndTranspilersJson;

  constructor(private filterService: FilterService) {
  }

  getAllCompilers(): Compiler[] {
    return this.compilers;
  }

  getActiveCompilers(): Compiler[] {
    const result: Compiler[] = [];
    for (const x of this.getAllCompilers()) {
      if (this.isActive(x)) {
        result.push(x);
      }
    }
    return result;
  }

  private isActive(compiler: Compiler): boolean {
    return true;
  }
}
