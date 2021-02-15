import { Injectable } from '@angular/core';
import { ProgrammingLanguage } from './programming-language.model';
// @ts-ignore
import programmingLanguagesJson from '../../../data/ProgrammingLanguages.json';
import { QerFilterModel } from '../filter/qerFilter.model';
import { QuantumExecutionResource } from '../quantum-execution-resource/quantum-execution-resource.model';
import { QplFilterModel } from '../filter/qplFilter.model';

@Injectable({
  providedIn: 'root'
})
export class ProgrammingLanguageService {

  programmingLanguages: ProgrammingLanguage[] = programmingLanguagesJson;

  constructor() { }

  getProgrammingLanguages(): ProgrammingLanguage[] {
    return this.programmingLanguages;
  }

  getAllProgrammingLanguages(): ProgrammingLanguage[] {
    return this.programmingLanguages;
  }

  getFilteredQpls(qplFilter: QplFilterModel): ProgrammingLanguage[] {
    return this.getAllProgrammingLanguages().filter(value => this.isActive(value, qplFilter));
  }

  private isActive(qpl: ProgrammingLanguage, filter: QplFilterModel): boolean {
    if (filter.names.length > 0 && !filter.names.includes(qpl.name)) {
      return false;
    }
    if (filter.types.length > 0 && !filter.types.includes(qpl.type)) {
      return false;
    }
    if (filter.syntaxImplementations.length > 0 && !filter.syntaxImplementations.includes(qpl.syntaxImplementation)) {
      return false;
    }
    if (filter.standardizations.length > 0 && !filter.standardizations.includes(qpl.standardization)) {
      return false;
    }
    return true;
  }
}
