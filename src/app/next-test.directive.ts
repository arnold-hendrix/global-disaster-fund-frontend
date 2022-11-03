import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNext]',
})
export class NextDirective {
  constructor(private elementRef: ElementRef) {}

  @HostListener('click')
  nextFunc() {
    var element = this.elementRef.nativeElement.parentElement.parentElement.children[0];
    var items = element.getElementsByClassName('item');
    element.append(items[0]);
  }
}
