import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRedTextHighlightColor]'
})
export class RedTextHighlightColorDirective implements OnInit {

  constructor(private element :ElementRef,private renderer:Renderer2) { }

  ngOnInit(): void {
   this.renderer.setStyle(this.element.nativeElement,'color','green')
  }

  @HostListener('mouseenter') onmouseenter(event:Event){
   this.renderer.setStyle(this.element.nativeElement,'color','red')

  }

  @HostListener('mouseleave') onmouseleave(event:Event){
    this.renderer.setStyle(this.element.nativeElement,'color','yellow')
 
   }

}
