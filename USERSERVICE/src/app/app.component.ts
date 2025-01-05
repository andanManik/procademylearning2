import { Component, OnInit } from '@angular/core';
import { UserService } from './Services/Userservice.service';
import { LoggerService } from './Services/logger.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserService,LoggerService]
})
export class AppComponent implements OnInit {
  constructor(private userservice: UserService){

  }

  users:{name:String,status:string}[] = []

  ngOnInit(){
    this.users = this.userservice.users
  }
}
