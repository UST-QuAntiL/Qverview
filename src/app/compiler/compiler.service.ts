import { Injectable } from '@angular/core';
import { Compiler } from './compiler.model';
// @ts-ignore
import compilersAndTranspilersJson from '../../../data/CompilersAndTranspilers.json';

@Injectable({
  providedIn: 'root'
})
export class CompilerService {

  compilers: Compiler[] = compilersAndTranspilersJson;

  constructor() { }

  getCompilers(): Compiler[] {
    return this.compilers;
  }
}
