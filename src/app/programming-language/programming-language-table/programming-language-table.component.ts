import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProgrammingLanguageService } from '../programming-language.service';
import { ProgrammingLanguage } from '../programming-language.model';
import { FilterService } from '../../filter/filter.service';
import { Sdk } from '../../sdk/sdk.model';

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

  constructor(private programmingLanguageService: ProgrammingLanguageService, private filterService: FilterService) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<ProgrammingLanguage>(this.programmingLanguageService.getAllProgrammingLanguages());

    this.filterService.qplFilterEvent$.subscribe(filter => {
      this.dataSource = new MatTableDataSource(filter);
    });

    this.filterService.searchEvent$.subscribe(value => {
      this.dataSource.filter = value;
    });
  }

  nameClicked(name: string): void {
    // this.filterService.toggleProgrammingLanguage(name);
  }

  typeClicked(type: string): void {
    // this.filterService.toggleLanguageType(type);
  }

  syntaxImplementationClicked(syntaxImplementation: string): void {
    // this.filterService.toggleSyntaxImplementation(syntaxImplementation);
  }

  standardizationClicked(standardization: string): void {
    // this.filterService.toggleStandardization(standardization);
  }
}
