import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appAppHighlightTextColor]'
})
export class AppHighlightTextColorDirective implements OnInit {

  constructor(private element:ElementRef) { }
  ngOnInit(): void {
   (this.element.nativeElement as HTMLElement).style.color="red";
  }


}
