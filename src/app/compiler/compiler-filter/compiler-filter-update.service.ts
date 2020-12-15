import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Compiler } from '../compiler.model';

@Injectable({
  providedIn: 'root'
})
export class CompilerFilterUpdateService {

  private subject = new Subject<Compiler>();
  private compilerFilter: Compiler;

  constructor() { }

  static isActive(compiler: Compiler, filter: Compiler): boolean {
    let result = true;
    for (const x of filter.inputLanguages) {
      if (!compiler.inputLanguages.includes(x)) {
        result = false;
      }
    }
    for (const x of filter.outputLanguages) {
      if (!compiler.outputLanguages.includes(x)) {
        result = false;
      }
    }
    for (const x of filter.optimizationStrategies) {
      if (!compiler.optimizationStrategies.includes(x)) {
        result = false;
      }
    }
    return result;
  }


  private updateFilter(): void {
    this.subject.next(this.compilerFilter);
  }

  get event$(): Observable<Compiler> {
    return this.subject.asObservable();
  }

  toggleInputLanguage(inputLanguage: string): void {
    const index = this.compilerFilter.inputLanguages.indexOf(inputLanguage, 0);
    if (index >= 0) {
      this.compilerFilter.inputLanguages.splice(index, 1);
    } else {
      this.compilerFilter.inputLanguages.push(inputLanguage);
    }
    this.updateFilter();
  }

  toggleOutputLanguage(outputLanguage: string): void {
    const index = this.compilerFilter.outputLanguages.indexOf(outputLanguage, 0);
    if (index >= 0) {
      this.compilerFilter.outputLanguages.splice(index, 1);
    } else {
      this.compilerFilter.outputLanguages.push(outputLanguage);
    }
    this.updateFilter();
  }

  toggleOptimizationStrategy(optimizationStrategy: string): void {
    const index = this.compilerFilter.optimizationStrategies.indexOf(optimizationStrategy, 0);
    if (index >= 0) {
      this.compilerFilter.optimizationStrategies.splice(index, 1);
    } else {
      this.compilerFilter.optimizationStrategies.push(optimizationStrategy);
    }
    this.updateFilter();
  }

  clear(): void {
    this.compilerFilter = {
      name: '',
      inputLanguages: [],
      outputLanguages: [],
      optimizationStrategies: []
    };
    this.updateFilter();
  }
}
