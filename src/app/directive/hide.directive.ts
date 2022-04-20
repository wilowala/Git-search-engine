import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHide]'
})
export class HideDirective {

  constructor(private elem: ElementRef) { 
    this.elem.nativeElement.style.display='none';
  }

}
