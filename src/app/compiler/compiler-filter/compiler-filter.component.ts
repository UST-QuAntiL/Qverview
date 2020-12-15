import { Component, OnInit } from '@angular/core';
import { Compiler } from '../compiler.model';
import { CompilerFilterUpdateService } from './compiler-filter-update.service';

@Component({
  selector: 'app-compiler-filter',
  templateUrl: './compiler-filter.component.html',
  styleUrls: ['../../app.component.scss', './compiler-filter.component.scss']
})
export class CompilerFilterComponent implements OnInit {

  compilersFilter: Compiler;

  constructor(private compilerFilterUpdateService: CompilerFilterUpdateService) { }

  ngOnInit(): void {
    this.compilerFilterUpdateService.event$.subscribe(filterUpdateEvent => {
      this.compilersFilter = filterUpdateEvent;
    });
    this.clear();
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

  clear(): void {
    this.compilerFilterUpdateService.clear();
  }
}
