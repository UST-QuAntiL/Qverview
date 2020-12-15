import { Injectable } from '@angular/core';
import { ProgrammingLanguage } from './programming-language.model';
// @ts-ignore
import programmingLanguagesJson from '../../../data/ProgrammingLanguages.json';

@Injectable({
  providedIn: 'root'
})
export class ProgrammingLanguageService {

  programmingLanguages: ProgrammingLanguage[] = programmingLanguagesJson;

  constructor() { }

  getProgrammingLanguages(): ProgrammingLanguage[] {
    return this.programmingLanguages;
  }
}
