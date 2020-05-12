import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Covid19Component } from './covid19/covid19.component';
import { EmployeeComponent }  from './employee/employee.component';
import { ProjectsComponent} from './projects/projects.component';
import { MyprojectsComponent} from './projects/myprojects/myprojects.component';
import { ClientProjectsComponent} from './projects/client-projects/client-projects.component';
import {ProjectDetailsComponent} from './projects/project-details/project-details.component';
import { CompanyProjectsComponent} from './projects/company-projects/company-projects.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import { Covid19Service } from './covid19.service';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkillsComponent } from './skills/skills.component';
import { SearchPipe } from './search.pipe';
import { QuizComponent } from './quiz/quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    Covid19Component,
    EmployeeComponent,
    ProjectsComponent,
    MyprojectsComponent,
    ClientProjectsComponent,
    ProjectDetailsComponent,
    CompanyProjectsComponent,
    SidebarComponent,
    SkillsComponent,
    QuizComponent,
    SearchPipe

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [Covid19Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
