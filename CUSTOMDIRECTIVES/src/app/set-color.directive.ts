import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[SetColor]'
})
export class SetColorDirective implements OnInit {

  // private element:ElementRef;  we can use private keyword with in the constructor parameter list so that this line of code no need; Angular will do this behind the sceen

  constructor(private element: ElementRef,private renderer: Renderer2) { 
    // this.element = element;
  }
  ngOnInit(){
    this.renderer.setStyle(this.element.nativeElement,'color','Orange')  
    this.renderer.addClass(this.element.nativeElement,'container')  
  }

}
