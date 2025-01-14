import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
constructor(private router:Router)
{

}

@Input({required:true}) parentData:string="";
@Output() childData=new EventEmitter();

MyChildEvent()
{
  this.childData.emit("Income tax is very high");
}

GottoContact()
{

//this.router.navigateByUrl("/contact/1/saritha");
// [routerLink]="['/contact',1,'Ravi']"
this.router.navigate(['/contact',1,'Gaytri']);
}

}
