import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { iDeactivate } from '../Services/canDeactivateGuard.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactComponent implements OnInit {

  firstName:string ='';
  lastName:string ='';
  country:string ='';
  subject:string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ProcessForm(){
    //Write logic to process the form
    this.router.navigate(['About']);
  }

  canExit()
  {
    if(this.firstName || this.lastName || this.country || this.subject)
    {return confirm("There are some unsaved data. Are you really want to move away from this page?")}
    else{
      return true
    }
  }
  
}
