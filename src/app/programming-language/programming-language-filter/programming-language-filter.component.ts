import { Component, OnInit } from '@angular/core';
import { ProgrammingLanguageFilterUpdateService } from './programming-language-filter-update.service';
import { ProgrammingLanguage } from '../programming-language.model';

@Component({
  selector: 'app-programming-language-filter',
  templateUrl: './programming-language-filter.component.html',
  styleUrls: ['../../app.component.scss', './programming-language-filter.component.scss']
})
export class ProgrammingLanguageFilterComponent implements OnInit {

  programmingLanguageFilter: ProgrammingLanguage;

  constructor(private programmingLanguageFilterUpdateService: ProgrammingLanguageFilterUpdateService) { }

  ngOnInit(): void {
    this.programmingLanguageFilterUpdateService.event$.subscribe(filterUpdateEvent => {
      this.programmingLanguageFilter = filterUpdateEvent;
    });
    this.clear();
  }

  typeClicked(type: string): void {
    this.programmingLanguageFilterUpdateService.toggleType(type);
  }

  syntaxImplementationClicked(syntaxImplementation: string): void {
    this.programmingLanguageFilterUpdateService.toggleSyntaxImplementation(syntaxImplementation);
  }

  standardizationClicked(standardization: string): void {
    this.programmingLanguageFilterUpdateService.toggleStandardization(standardization);
  }

  clear(): void {
    this.programmingLanguageFilterUpdateService.clear();
  }
}
