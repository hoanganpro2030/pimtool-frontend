import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './body/menu/menu.component';
import { BodyComponent } from './body/body.component';
import { ContentComponent } from './body/content/content.component';
import { ProjectFormComponent } from './body/content/project-form/project-form.component';
import { ProjectListComponent } from './body/content/project-list/project-list.component';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const appRoutes: Routes = [
  // { path: '', redirectTo: 'project-list', pathMatch: 'full' },
  { path: 'project-list', component: ProjectListComponent },
  { path: 'project-form', component: ProjectFormComponent},
  
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    BodyComponent,
    ContentComponent,
    ProjectFormComponent,
    ProjectListComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
