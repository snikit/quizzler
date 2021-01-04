import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[hover-class]',
})
export class HoverClassDirective {
  constructor(public elementRef: ElementRef) {}
  @Input('hover-class') hoverClass: any;
  @Input('remove-class-on-mouseleave') removeClass: boolean = true;

  @HostListener('mouseenter') onMouseEnter() {
    this.elementRef.nativeElement.classList.add(this.hoverClass);
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.removeClass)
      this.elementRef.nativeElement.classList.remove(this.hoverClass);
  }
}
