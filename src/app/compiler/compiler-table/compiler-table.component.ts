import { Component, OnInit } from '@angular/core';
import { CompilerService } from '../compiler.service';
import { MatTableDataSource } from '@angular/material/table';
import { FilterService } from '../../filter/filter.service';
import { Compiler } from '../compiler.model';

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
    this.dataSource = new MatTableDataSource<Compiler>(this.compilerService.getAllCompilers());

    this.filterService.compilerFilterEvent$.subscribe(filter => {
      this.dataSource = new MatTableDataSource(filter);
    });

    this.filterService.searchEvent$.subscribe(value => {
      this.dataSource.filter = value;
    });
  }
}
