import { Component, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ANGULARFORMS';
 @ViewChild('myForm') form: NgForm=Object.create(NgForm)

 gender = [
  {id:'1',value:'Male'},
  {id:'2',value:'Female'},
  {id:3,value:'Other'}
]
default='Male';

  onSubmit(){
    console.log(this.form)
  }
}
