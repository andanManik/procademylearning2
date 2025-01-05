import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector: '[setBackground]'
})
export class setBackgroundDirective{
constructor(element:ElementRef){
    element.nativeElement.style.backgroundColor='#98fb98'
}
}