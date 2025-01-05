import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class AppStyleDirective {

  constructor(private element: ElementRef,private renderer:Renderer2) { }

  @Input() set setStyle(Styles:object){
    let entries = Object.entries(Styles);
    //console.log(entries)

    for(let entry of entries)
    {
        this.renderer.setStyle(this.element.nativeElement,entry[0],entry[1])
    }
  } 
}
