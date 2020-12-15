import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';


import { AppComponent } from './app.component';
import { SdksTableComponent } from './sdk/sdks-table/sdks-table.component';
import { OrchestratorsTableComponent } from './orchestrator/orchestrators-table/orchestrators-table.component';
import { QuantumCloudServicesTableComponent } from './quantum-cloud-service/qcs-table/quantum-cloud-services-table.component';
import { QuantumExecutionResourcesTableComponent } from './quantum-execution-resource/quantum-execution-resources-table/quantum-execution-resources-table.component';
import { SdkFilterComponent } from './sdk/sdk-filter/sdk-filter.component';
import { OrchestratorFilterComponent } from './orchestrator/orchestrator-filter/orchestrator-filter.component';
import { QcsFilterComponent } from './quantum-cloud-service/qcs-filter/qcs-filter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProgrammingLanguageTableComponent } from './programming-language/programming-language-table/programming-language-table.component';
import { ProgrammingLanguageFilterComponent } from './programming-language/programming-language-filter/programming-language-filter.component';
import { CompilerTableComponent } from './compiler/compiler-table/compiler-table.component';
import { CompilerFilterComponent } from './compiler/compiler-filter/compiler-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    SdksTableComponent,
    OrchestratorsTableComponent,
    QuantumCloudServicesTableComponent,
    QuantumExecutionResourcesTableComponent,
    SdkFilterComponent,
    OrchestratorFilterComponent,
    QcsFilterComponent,
    ProgrammingLanguageTableComponent,
    ProgrammingLanguageFilterComponent,
    CompilerTableComponent,
    CompilerFilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatTableModule,
    MatSortModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
