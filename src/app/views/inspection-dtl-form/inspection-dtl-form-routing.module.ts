import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InspectionDtlFormComponent } from "./inspection-dtl-form.component";

const routes: Routes = [
  {
    path: '',
    component: InspectionDtlFormComponent,
    data: {
      title: 'Inspection Dtl Form'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InspectionDetailsFormRoutingModule {}