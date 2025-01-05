import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DemoComponent } from './demo/demo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VIEWCHILD';

  
 @ViewChild("dateofBirth") dateofbirth?:ElementRef;
  @ViewChild("age") Age?:ElementRef

  //below viewchild is for accessing the child componenet
  @ViewChild('DemoComponent', { static: true })   democomp: DemoComponent=new DemoComponent;

  currentAge: number= 0
  lblValue:string= ""
  calculateAge(){
   let birthyear = new Date(this.dateofbirth?.nativeElement.value).getFullYear(); 
    let currentYear = new Date().getFullYear()
  
    this.currentAge = currentYear-birthyear;
    this.Age?.nativeElement.value
    
    console.log(birthyear);
    console.log(currentYear);    
  }
  
  showAge(data: HTMLInputElement)
  {
   this.lblValue= data.value
  }
}
