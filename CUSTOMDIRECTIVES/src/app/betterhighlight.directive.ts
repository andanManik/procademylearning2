import { Directive, ElementRef, HostBinding, HostListener, Output, Renderer2,Input } from '@angular/core';

@Directive({
  selector: '[Betterhighlight]'
})
export class BetterhighlightDirective {

  constructor(private element: ElementRef,private renderer: Renderer2) { }

@Input('defaultColor')  defaultColor: string = 'yellow'
 @Input('highlightedColor') highlightedColor: string = 'pink'


@HostBinding('style.backgroundColor') background: string = this.defaultColor



@HostListener('mouseenter') changetoPink(){this.background = this.highlightedColor}
@HostListener('mouseout') changetoGray(){this.background = this.defaultColor}
}
