import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SdksTableComponent } from './sdk/sdks-table/sdks-table.component';
import { OrchestratorsTableComponent } from './orchestrator/orchestrators-table/orchestrators-table.component';
import { QuantumCloudServicesTableComponent } from './quantum-cloud-service/quantum-cloud-services-table/quantum-cloud-services-table.component';

@NgModule({
  declarations: [
    AppComponent,
    SdksTableComponent,
    OrchestratorsTableComponent,
    QuantumCloudServicesTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
