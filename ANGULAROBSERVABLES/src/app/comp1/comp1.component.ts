import { Component } from '@angular/core';
import { serviceforsubjectservice } from '../services/serviceforsubject.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {

  constructor(private obsService: serviceforsubjectservice){

  }
enteredString: string=""

onClick(){
  
  this.obsService.emitString(this.enteredString)


}
  

}
