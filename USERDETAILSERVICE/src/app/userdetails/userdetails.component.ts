import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
constructor(private userservice: UserService){

  this.user = {name:"",age:0,phone:0,address:"",job:""};
}

user:{name:string,age:number,phone:number,address:string,job:string};

ngOnInit(){
this.userservice.onShowDetailsClicked.
        subscribe((data=> this.user = data))
}
}
