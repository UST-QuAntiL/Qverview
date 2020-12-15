export interface Compiler {
  name: string;
  inputLanguages: string[];
  outputLanguages: string[];
  optimizationStrategies: string[];
}
