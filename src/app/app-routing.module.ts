import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LanguageGraphComponent } from './language-graph/language-graph.component';


const routes: Routes = [
  { path: 'conversion', component: LanguageGraphComponent },
  { path: '', component: IndexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

