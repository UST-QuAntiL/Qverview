import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';


import { AppComponent } from './app.component';
import { SdksTableComponent } from './sdk/sdks-table/sdks-table.component';
import { OrchestratorsTableComponent } from './orchestrator/orchestrators-table/orchestrators-table.component';
import { QuantumCloudServicesTableComponent } from './quantum-cloud-service/quantum-cloud-services-table/quantum-cloud-services-table.component';
import { QuantumComputationResourcesTableComponent } from './quantum-computation-resource/quantum-computation-resources-table/quantum-computation-resources-table.component';
import { SdkFilterComponent } from './sdk/sdk-filter/sdk-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    SdksTableComponent,
    OrchestratorsTableComponent,
    QuantumCloudServicesTableComponent,
    QuantumComputationResourcesTableComponent,
    SdkFilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatTableModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
