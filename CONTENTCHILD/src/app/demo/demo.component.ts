import { AfterContentInit, Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements AfterContentInit {
//We can access the html element from parent component in the child component class using @ContentChild decorator.
 @ContentChild('paragraph') paragraphProp: any;

 ngAfterContentInit(){
  //console.log(this.paragraphProp?.nativeElement.textContent)
  this.paragraphProp.nativeElement.textContent = 'Updated content of the projected conteent';
 } 
  
}
