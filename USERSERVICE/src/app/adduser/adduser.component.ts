import { Component } from '@angular/core';
import { UserService } from '../Services/Userservice.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {

  constructor(private userService: UserService){

  }
  username: string = ''
  status: string = 'Active'

addUser(){
  
  this.userService.AddUser(this.username,this.status)
}

}
