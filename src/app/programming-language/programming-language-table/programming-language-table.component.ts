import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProgrammingLanguageService } from '../programming-language.service';
import { ProgrammingLanguage } from '../programming-language.model';
import { FilterService } from '../../filter/filter.service';

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

  constructor(private programmingLanguageService: ProgrammingLanguageService, private filterService: FilterService) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.programmingLanguageService.getProgrammingLanguages());

    this.filterService.events$.subscribe(filter => {
      this.dataSource = new MatTableDataSource(this.programmingLanguageService.getActiveProgrammingLanguages());
    });
  }

  nameClicked(name: string): void {
    this.filterService.toggleProgrammingLanguage(name);
  }

  typeClicked(type: string): void {
    this.filterService.toggleLanguageType(type);
  }

  syntaxImplementationClicked(syntaxImplementation: string): void {
    this.filterService.toggleSyntaxImplementation(syntaxImplementation);
  }

  standardizationClicked(standardization: string): void {
    this.filterService.toggleStandardization(standardization);
  }
}
