import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateInterventionComponent } from './create-intervention/create-intervention.component';
import { InterventionListComponent } from './intervention-list/intervention-list.component';
import { UpdateInterventionComponent } from './update-intervention/update-intervention.component';
import { InterventionDetailsComponent } from './intervention-details/intervention-details.component';
import { TestComponent } from './test/test.component';
import { StatsComponent } from './stats/stats.component';

const routes: Routes = [
  {path: 'interventions', component: InterventionListComponent},
  {path: 'create-intervention', component: CreateInterventionComponent},
  {path: '', redirectTo: 'interventions', pathMatch: 'full'},
  {path: 'update-intervention/:id', component: UpdateInterventionComponent},
  {path: 'intervention-details/:id', component: InterventionDetailsComponent},
  {path: 'test/:intervenant', component: TestComponent},
  {path: 'stats', component: StatsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
