import { Injectable } from '@angular/core';
import { ProgrammingLanguage } from './programming-language.model';
// @ts-ignore
import programmingLanguagesJson from '../../../data/ProgrammingLanguages.json';
import { FilterService } from '../filter/filter.service';

@Injectable({
  providedIn: 'root'
})
export class ProgrammingLanguageService {

  programmingLanguages: ProgrammingLanguage[] = programmingLanguagesJson;

  constructor(private filterService: FilterService) { }

  getProgrammingLanguages(): ProgrammingLanguage[] {
    return this.programmingLanguages;
  }

  getActiveProgrammingLanguages(): ProgrammingLanguage[] {
    const result: ProgrammingLanguage[] = [];
    for (const x of this.getProgrammingLanguages()) {
      if (this.isActive(x)) {
        result.push(x);
      }
    }
    return result;
  }

  private isActive(programmingLanguage: ProgrammingLanguage): boolean {
    return true;
  }
}
