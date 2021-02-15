import { Injectable } from '@angular/core';
import { Compiler } from './compiler.model';
// @ts-ignore
import compilersAndTranspilersJson from '../../../data/CompilersAndTranspilers.json';
import { QuantumCloudService } from '../quantum-cloud-service/quantum-cloud-service.model';
import { FilterService } from '../filter/filter.service';
import { CompilerFilterModel } from '../filter/compilerFilter.model';
import { SdkFilterModel } from '../filter/sdkFilter.model';
import { Sdk } from '../sdk/sdk.model';
import { ProgrammingLanguage } from '../programming-language/programming-language.model';
import { QplFilterModel } from '../filter/qplFilter.model';

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

  getFilteredCompilers(compilerFilter: CompilerFilterModel): Compiler[] {
    return this.getAllCompilers().filter(value => this.isActive(value, compilerFilter));
  }

  private isActive(compiler: Compiler, filter: CompilerFilterModel): boolean {
    if (filter.names.length > 0 && !filter.names.includes(compiler.name)) {
      return false;
    }
    if (!this.supportsOneOf(filter.inputLanguages, compiler.inputLanguages)) {
      return false;
    }
    if (!this.supportsOneOf(filter.outputLanguages, compiler.outputLanguages)) {
      return false;
    }
    if (!this.supportsOneOf(filter.optimizationStrategies, compiler.optimizationStrategies)) {
      return false;
    }
    return true;
  }

  private supportsOneOf(filter: string[], obj: string[]): boolean {
    if (filter == null || filter.length === 0) {
      return true;
    }
    for (const x of filter) {
      if (obj.includes(x)) {
        return true;
      }
    }
    return false;
  }
}
