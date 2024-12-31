import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
@Input({required:true}) parentData:string="";
@Output() childData=new EventEmitter();

MyChildEvent()
{
  this.childData.emit("Income tax is very high");
}

}
