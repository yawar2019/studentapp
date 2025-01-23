import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { IDeactivate } from '../app-deactive-guard.service';

@Component({
  selector: 'app-about',
  imports: [RouterLink,RouterOutlet],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements IDeactivate {

  user={
    id:"",
    name:""
  }

constructor(private router:Router,private route:ActivatedRoute)
{

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
