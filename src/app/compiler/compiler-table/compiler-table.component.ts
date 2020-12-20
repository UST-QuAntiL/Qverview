import { Component, OnInit } from '@angular/core';
import { CompilerService } from '../compiler.service';
import { MatTableDataSource } from '@angular/material/table';
import { FilterService } from '../../filter/filter.service';

@Component({
  selector: 'app-compiler-table',
  templateUrl: './compiler-table.component.html',
  styleUrls: ['../../app.component.scss', './compiler-table.component.scss']
})
export class CompilerTableComponent implements OnInit {

  dataSource;
  displayedColumns = [
    'name',
    'inputLanguages',
    'outputLanguages',
    'optimizationStrategies'
  ];

  constructor(private compilerService: CompilerService, private filterService: FilterService) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.compilerService.getAllCompilers());
    this.filterService.searchEvent$.subscribe(value => this.dataSource.filter = value);
  }
}
