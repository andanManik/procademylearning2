import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[Hover]'
})
export class HoverDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { 

  }

 @HostListener('mouseenter')  onMouseEnter(){
    this.renderer.setStyle(this.element.nativeElement,'margin','30px 30px');
    this.renderer.setStyle(this.element.nativeElement,'padding','30px 30px');
    this.renderer.setStyle(this.element.nativeElement,'transition','0.5s');   
  }

  @HostListener('mouseout')  onMouseOut(){
    this.renderer.setStyle(this.element.nativeElement,'margin','10px 10px');
    this.renderer.setStyle(this.element.nativeElement,'padding','10px 10px');
    this.renderer.setStyle(this.element.nativeElement,'transition','0.5s');   
  }

  

}
