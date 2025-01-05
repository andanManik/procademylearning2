import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { setBackgroundDirective } from './customdirectives/setBackground.directive';
import { SetColorDirective } from './set-color.directive';
import { HoverDirective } from './hover.directive';
import { BetterhighlightDirective } from './betterhighlight.directive';
import { AppStyleDirective } from './app-style.directive';

@NgModule({
  declarations: [
    AppComponent,
    setBackgroundDirective,
    SetColorDirective,
    HoverDirective,
    BetterhighlightDirective,
    AppStyleDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
