import { Directive,ElementRef,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
    @Input() defaultColor: string='yellow';
    constructor(private ele: ElementRef ) {
        this.setStyle(this.defaultColor);
    }

    @HostListener('mouseenter') onmouseenter() {
        this.setStyle('red');
    }

    @HostListener('mouseleave') onmouseleave() {
        
        this.setStyle(null);
    }

    setStyle(color:string) {
        this.ele.nativeElement.style.backgroundColor = color;
    }



}
