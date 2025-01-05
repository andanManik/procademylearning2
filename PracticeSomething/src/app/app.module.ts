import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomAttributeDirectiveComponent } from './custom-attribute-directive/custom-attribute-directive.component';
import { MyColorDirective } from './my-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomAttributeDirectiveComponent,
    MyColorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
