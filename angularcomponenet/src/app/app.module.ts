import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ContainerComponent } from './Container/container.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { NotificationComponent } from './notification/notification.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { Router,Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CourseComponent } from './course/course.component';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';

const appRoute: Routes = [
  {path:'',component:HomeComponent},
  {path:'Home',component:HomeComponent},
  {path:'Contact',component:ContactComponent},
  {path:'Courses',component:CourseComponent},
  {path:'About',component:AboutComponent},
  {path:'Product',component:ProductComponent},
  {path:'**',component:ErrorComponent}
]
  

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ContactComponent,
    CourseComponent,
    HomeComponent,
    NavComponent,
    HeaderComponent,
    NotificationComponent,
    SearchComponent,
    ProductComponent,
    AboutComponent,    
    ErrorComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forChild(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
