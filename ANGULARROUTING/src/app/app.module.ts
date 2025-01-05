import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';
import { CourseComponent } from './courses/course/course.component';
import { FormsModule } from '@angular/forms';
import { CoursesComponent } from './courses/courses.component';
import { ContainerComponent } from './container/container.component';
import { NavComponent } from './nav/nav.component';

const appRoute: Routes = [
  {path:'',component:HomeComponent},
  {path:'Home',component:HomeComponent},
  {path:'Contact',component:ContactComponent},
  {path:'Courses',component:CoursesComponent},
  {path:'Courses/Course/:id',component:CourseComponent},  
  {path:'About',component:AboutComponent},
  {path:'**',component:ErrorComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,    
    AboutComponent,
    ErrorComponent,
    CourseComponent,
    CoursesComponent,
    ContainerComponent,
    NavComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
