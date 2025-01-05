import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit{
 constructor(private userservice: UserService){

 }
  
users:{name:string,age:number,phone:number,address:string,job:string}[]=[]

 ngOnInit()
  {
    this.users = this.userservice.getAllUsers();
    console.log(this.users)
  }
  showDetails(user:{name:string,age:number,phone:number,address:string,job:string}){
    this.userservice.ShowDetails(user); 
  }
}
