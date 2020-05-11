import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { Covid19Component } from './covid19/covid19.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';
import { CompanyProjectsComponent } from './projects/company-projects/company-projects.component';
import { ClientProjectsComponent } from './projects/client-projects/client-projects.component';


const routes: Routes = [
  { path: 'employee', component: EmployeeComponent },
  { path: 'covid19', component: Covid19Component },
  { path: 'projects', component: ProjectsComponent},
  { path: 'company-projects', component: CompanyProjectsComponent },
  { path: 'client-projects', component: ClientProjectsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
