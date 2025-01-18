import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterLink,RouterOutlet],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  user={
    id:"",
    name:""
  }

constructor(private router:Router,private route:ActivatedRoute)
{

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
