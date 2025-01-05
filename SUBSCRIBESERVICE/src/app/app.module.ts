import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularcourseComponent } from './angularcourse/angularcourse.component';
import { JavascriptcourseComponent } from './javascriptcourse/javascriptcourse.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularcourseComponent,
    JavascriptcourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
