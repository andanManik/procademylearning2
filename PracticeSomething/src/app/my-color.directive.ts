import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMyColor]'
})
export class MyColorDirective implements OnInit{

  constructor(private element: ElementRef,private renderer: Renderer2) { }

  ngOnInit(){
    this.renderer.setStyle(this.element.nativeElement,'background-color','blue')
  }
 
 @HostListener('mouseenter') onMouseOver(){
    this.renderer.setStyle(this.element.nativeElement,'margin','30px 30px')
    this.renderer.setStyle(this.element.nativeElement,'padding','10px 10px')
    this.renderer.setStyle(this.element.nativeElement,'transition','0.5s')
  }

  @HostListener('mouseout')onMouseOut(){
    this.renderer.setStyle(this.element.nativeElement,'margin','10px 10px')
    this.renderer.setStyle(this.element.nativeElement,'padding','30px 30px')
    this.renderer.setStyle(this.element.nativeElement,'transition','0.5s')
  }
}
