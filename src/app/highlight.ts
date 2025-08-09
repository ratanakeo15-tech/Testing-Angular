import { Directive, ElementRef, HostListener, Input, inject, input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  // binding to a second property
  // means your directive (or component) can have more than one @Input so you can pass multiple values from the template 
  defaultColor = input('');
  @Input('appHighlight') highlightColor: string = 'yellow'; // default color
  @Input('textColor') textcolor: string = 'black';
  private el = inject(ElementRef);

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor() || 'red',this.textcolor || this.defaultColor());
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('','');
  }
  

  private highlight(color: string,text: string) {
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.color=text;
  }
}
