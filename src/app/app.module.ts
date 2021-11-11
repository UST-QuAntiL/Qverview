import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SdksTableComponent } from './sdk/sdks-table/sdks-table.component';
import { OrchestratorsTableComponent } from './orchestrator/orchestrators-table/orchestrators-table.component';
import { QuantumCloudServicesTableComponent } from './quantum-cloud-service/qcs-table/quantum-cloud-services-table.component';
import { QuantumExecutionResourcesTableComponent } from './quantum-execution-resource/quantum-execution-resources-table/quantum-execution-resources-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProgrammingLanguageTableComponent } from './programming-language/programming-language-table/programming-language-table.component';
import { CompilerTableComponent } from './compiler/compiler-table/compiler-table.component';
import { FilterComponent } from './filter/filter.component';
import { SyncSdkQcsButtonComponent } from './filter/sync-sdk-qcs-button/sync-sdk-qcs-button.component';
import { SyncQcsQerButtonComponent } from './filter/sync-qcs-qer-button/sync-qcs-qer-button.component';
import { IndexComponent } from './index/index.component';
import { LanguageGraphComponent } from './language-graph/language-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    SdksTableComponent,
    OrchestratorsTableComponent,
    QuantumCloudServicesTableComponent,
    QuantumExecutionResourcesTableComponent,
    ProgrammingLanguageTableComponent,
    CompilerTableComponent,
    FilterComponent,
    SyncSdkQcsButtonComponent,
    SyncQcsQerButtonComponent,
    IndexComponent,
    LanguageGraphComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    MatTableModule,
    MatSortModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatDividerModule,
    MatPaginatorModule,
    MatTabsModule,
    MatExpansionModule,
    MatCardModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
