import { Component, OnInit } from '@angular/core';
import { serviceforsubjectservice } from '../services/serviceforsubject.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor(private obsService: serviceforsubjectservice){

  }
  enteredText:string = ""


  ngOnInit(){
    this.obsService.stringEmitter.subscribe((val:string)=>{
      this.enteredText = val
    })
  }


}
