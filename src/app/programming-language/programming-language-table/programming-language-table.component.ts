import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProgrammingLanguageService } from '../programming-language.service';
import { ProgrammingLanguageFilterUpdateService } from '../programming-language-filter/programming-language-filter-update.service';
import { ProgrammingLanguage } from '../programming-language.model';
import { Orchestrator } from '../../orchestrator/orchestrator.model';

@Component({
  selector: 'app-programming-language-table',
  templateUrl: './programming-language-table.component.html',
  styleUrls: ['../../app.component.scss', './programming-language-table.component.scss']
})
export class ProgrammingLanguageTableComponent implements OnInit {

  dataSource;
  displayedColumns = [
    'name',
    'type',
    'syntaxImplementation',
    'standardization'
  ];
  private programmingLanguageFilter: ProgrammingLanguage;

  constructor(private programmingLanguageService: ProgrammingLanguageService, private programmingLanguageFilterUpdateService: ProgrammingLanguageFilterUpdateService) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.programmingLanguageService.getProgrammingLanguages());
    this.dataSource.filterPredicate = (data, filter: ProgrammingLanguage) => {
      return ProgrammingLanguageFilterUpdateService.isActive(data, filter);
    };

    this.programmingLanguageFilterUpdateService.event$.subscribe(filterUpdateEvent => {
      this.programmingLanguageFilter = filterUpdateEvent;
      this.dataSource.filter = filterUpdateEvent;
    });
  }

  getActiveFilter(): ProgrammingLanguage {
    if (this.programmingLanguageFilter == null) {
      this.programmingLanguageFilterUpdateService.clear();
    }
    return this.programmingLanguageFilter;
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

}
