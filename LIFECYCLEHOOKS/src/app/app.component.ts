import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LIFECYCLEHOOKS';
  inputValue:string=""  ;
  ChildComponent:boolean = true;

  onClick(data: HTMLInputElement){
    this.inputValue = data.value;
  }
  DestroyComponent(){
    this.ChildComponent = false;
  }  
  ShowComponent(){
    this.ChildComponent = true;
  }
}
