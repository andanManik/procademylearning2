import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template:`<div class="alert alert-success" [ngClass]="{fadeOut: ShowNotification}">
    This site uses cookies for better experience.
    <div class="close"><button class="btn" (click)="CanClose()">X</button></div>
    </div>` ,
  styles: [".notification-class{margin:10px 0px; padding: 10px 20px; background-color:#FAD7A0;text-align:center; }",
    "p{font-size:14px}",".close{float:right;margin-top:-15px;}",
    ".fadeOut{visibility:hidden;opacity:0;transition: visibility 0s 2s,opacity 2s linear;}"]
})
export class NotificationComponent {

  ShowNotification: boolean = false
  
  CanClose(){
    this.ShowNotification = !this.ShowNotification
  }
}
