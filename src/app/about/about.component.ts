import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { IDeactivate } from '../app-deactive-guard.service';
import { select, Store } from '@ngrx/store';
import { selectCount } from '../Statemanagement/counter.selector';
import {first, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-about',
  imports: [RouterLink,RouterOutlet,CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements IDeactivate {

  count$:Observable<number>;
  user={
    id:"",
    name:""
  }

constructor(private router:Router,private route:ActivatedRoute,public store:Store)
{
this.count$= this.store.select(selectCount);
}
  canExist(): boolean{
if(confirm("Are you sure you want to Exit?"))
{
  return true;
}
else{
  return false;
}

  }

@Input({required:true}) parentData:string="";
@Output() childData=new EventEmitter();


ngOnInit(): void {

  this.route.params.subscribe((data)=>{
    this.user={
      id:data['id'],
      name:data['name']
     }

   })

}




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
