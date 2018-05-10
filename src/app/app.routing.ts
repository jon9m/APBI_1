import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [      
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },     
      {
        path: 'mycalendar',
        loadChildren: './views/mycalendar/mycalendar.module#MyCalendarModule'
      },
      {
        path: 'inspectiondtlform',
        loadChildren: './views/inspection-dtl-form/inspection-dtl-form.module#InspectionDtlFormModule'
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {preloadingStrategy:PreloadAllModules})],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
