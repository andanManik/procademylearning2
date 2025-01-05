import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdduserComponent } from './adduser/adduser.component';
import { FormsModule } from '@angular/forms';
import { LoggerService } from './Services/logger.service';
import { UserService } from './Services/Userservice.service';

@NgModule({
  declarations: [
    AppComponent,
    AdduserComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LoggerService,
    UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
