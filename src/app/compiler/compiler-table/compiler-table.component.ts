import { Component, OnInit } from '@angular/core';
import { CompilerService } from '../compiler.service';
import { MatTableDataSource } from '@angular/material/table';
import { CompilerFilterUpdateService } from '../compiler-filter/compiler-filter-update.service';
import { QuantumCloudService } from '../../quantum-cloud-service/quantum-cloud-service.model';
import { QcsFilterUpdateService } from '../../quantum-cloud-service/qcs-filter/qcs-filter-update.service';
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

  private compilerFilter: Compiler;

  constructor(private compilerService: CompilerService, private compilerFilterUpdateService: CompilerFilterUpdateService) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.compilerService.getCompilers());
    this.dataSource.filterPredicate = (data, filter: Compiler) => {
      return CompilerFilterUpdateService.isActive(data, filter);
    };

    this.compilerFilterUpdateService.event$.subscribe(filterUpdateEvent => {
      this.compilerFilter = filterUpdateEvent;
      this.dataSource.filter = filterUpdateEvent;
    });
  }

  getActiveFilter(): Compiler {
    if (this.compilerFilter == null) {
      this.compilerFilterUpdateService.clear();
    }
    return this.compilerFilter;
  }

  inputLanguageClicked(inputLanguage: string): void {
    this.compilerFilterUpdateService.toggleInputLanguage(inputLanguage);
  }

  outputLanguageClicked(outputLanguage: string): void {
    this.compilerFilterUpdateService.toggleOutputLanguage(outputLanguage);
  }

  optimizationStrategyClicked(optimizationStrategy: string): void {
    this.compilerFilterUpdateService.toggleOptimizationStrategy(optimizationStrategy);
  }
}
