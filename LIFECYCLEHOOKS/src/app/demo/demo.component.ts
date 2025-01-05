import { AfterContentChecked, AfterContentInit, AfterViewInit, Component,DoCheck,Input,OnChanges,OnDestroy,OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,OnDestroy {
@Input() enteredText:string="Procademy"


//hook 1 -- when constructor called the input property value will not be updated.. 
constructor(){
  console.log('constructor called!')
//  console.log('value of inputvalue property (enteredText) is before updated:'+this.enteredText)
}
//hook 2: This method will get called for each input property or directive changes 
ngOnChanges(){
console.log('ngOnChanges called!!')

}
//hook 3  --This will be called immediately after constructor called  this will update the input property values based on the property binding as well
ngOnInit(){
  console.log('ngOnInit Called!')
//  console.log('Initial value value of inputvalue property (enteredText) is after updated:'+this.enteredText)
}

//hook 4 -- This would get called whenever the angular change detection cycle runs.. This will get called even if there is no changes in any property or directive
ngDoCheck(){
console.log('ngDoCheck called!!')
}

//hook 5 -- This will only get caled at the first change detection cycle.. this will initiate the projected content value
ngAfterContentInit(){
console.log('ngAfterContentInit Called!')
}

//hook 6  -- This will get called for each change detection cycle and also called if the there is a change in the projected content 
ngAfterContentChecked(){
  console.log('ngAfterContentChecked Called!!')
}

//hook 7 -- This will get called only after the components view and its child component views are fully initialized.. This will get called only once in the first change detection cycle
ngAfterViewInit(){
  console.log('ngAfterViewInit Called!!')
}

//hook 8 -- This will get called for each change detection cycle.. and if there is any change in the componenet view or child component view
ngAfterViewChecked(){
  console.log('ngAfterViewChecked Called!!')
}

//hook 9 -- This will get called only when if the component dom element from the component or component is removed

ngOnDestroy(){
  console.log('ngOnDestroy Called!!')
}
}
