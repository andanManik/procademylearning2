import { EventEmitter } from "@angular/core";

export class UserService{
    users = [
        {name:'Manikandan',age:46,phone:90030893,address:"wilmington",job:"Teacher"},
        {name:'Arumugam',age:46,phone:25225252,address:"Erode",job:"teacher"},
        {name:'vijay',age:46,phone:152422512,address:"Salem",job:"teacher"},
        {name:'Vinoth',age:46,phone:3265326532,address:"Bhavani",job:"Software Engineer"},
    ]

    getAllUsers(){
        return this.users;
    }

    onShowDetailsClicked = new EventEmitter<{name:string,age:number,phone:number,address:string,job:string}>();

    ShowDetails(user:{name:string,age:number,phone:number,address:string,job:string} ){
        this.onShowDetailsClicked.emit(user);
    }
}