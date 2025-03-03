import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ChildrenComponent } from '../children/children.component';

@Component({
  selector: 'app-parent',
  imports: [ChildrenComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent implements AfterViewInit {

  fullname:string='';
@ViewChild(ChildrenComponent) childrencomponent!:ChildrenComponent;
// @ViewChild('inputE1') inputElement!:ElementRef;
@ViewChildren('inputE1',{}) inputElements!:QueryList<ElementRef>;
ngAfterViewInit(): void {
   this.childrencomponent.SayHello();
}

childMethodCall()
{
  this.childrencomponent.SayHello();

}

show()
{
  let name='';
   this.inputElements.forEach(element => {
    name+=element.nativeElement.value+' '
   });
    this.fullname=name.trim();

}

}
