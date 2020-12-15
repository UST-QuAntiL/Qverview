import { Injectable } from '@angular/core';
import { ProgrammingLanguage } from '../programming-language.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgrammingLanguageFilterUpdateService {

  private subject = new Subject<ProgrammingLanguage>();
  private programmingLanguageFiler: ProgrammingLanguage;

  constructor() { }

  static isActive(programmingLanguage: ProgrammingLanguage, filter: ProgrammingLanguage): boolean {
    let result = true;
    if (filter.type !== '' && programmingLanguage.type !== filter.type) {
      result = false;
    }
    if (filter.syntaxImplementation !== '' && programmingLanguage.syntaxImplementation !== filter.syntaxImplementation) {
      result = false;
    }
    if (filter.standardization !== '' && programmingLanguage.standardization !== filter.standardization) {
      result = false;
    }
    return result;
  }

  private updateFilter(): void {
    this.subject.next(this.programmingLanguageFiler);
  }

  get event$(): Observable<ProgrammingLanguage> {
    return this.subject.asObservable();
  }

  toggleType(type: string): void {
    if (this.programmingLanguageFiler.type === '') {
      this.programmingLanguageFiler.type = type;
    } else {
      this.programmingLanguageFiler.type = '';
    }
    this.updateFilter();
  }

  toggleSyntaxImplementation(syntaxImplementation: string): void {
    if (this.programmingLanguageFiler.syntaxImplementation === '') {
      this.programmingLanguageFiler.syntaxImplementation = syntaxImplementation;
    } else {
      this.programmingLanguageFiler.syntaxImplementation = '';
    }
    this.updateFilter();
  }

  toggleStandardization(standardization: string): void {
    if (this.programmingLanguageFiler.standardization === '') {
      this.programmingLanguageFiler.standardization = standardization;
    } else {
      this.programmingLanguageFiler.standardization = '';
    }
    this.updateFilter();
  }

  clear(): void {
    this.programmingLanguageFiler = {
      name: '',
      type: '',
      syntaxImplementation: '',
      standardization: ''
    };
    this.updateFilter();
  }
}
