export interface Sdk {
    name: string;
    licenses: string[];
    programmingLanguages: string[];
    compilerInputLanguages: string[];
    compilerOutputLanguages: string[];
    compilerOptimizationStrategies: string[];
    activeDevelopment: boolean;
    supportedQuantumCloudServices: string[];
    localSimulator: boolean;
}
