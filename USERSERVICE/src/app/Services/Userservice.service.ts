import { Injectable } from "@angular/core"
import { LoggerService } from "./logger.service"

@Injectable() //the logger service is injected in this UserService
export class UserService{
    constructor(private loggerService:LoggerService){
    }

    users=[
        {name:'Manik',status:'Active'},
        {name:'sundar',status:'Inactive'},
        {name:'Sudhakar',status:'Active'}
        ]

    AddUser(name:string,status:string){
        this.users.push({name:name,status:status})
        this.loggerService.logger(name,status)
    }
}

