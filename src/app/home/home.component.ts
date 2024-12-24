import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { AboutComponent } from '../about/about.component';
import { first } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [AppComponent,AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
alphabet="z";
carlist=['BMW','Tata','TesLa','Nano'];
sports=[
  {id:1,name:"Virat"},
  {id:2,name:"Bumrah"},
  {id:3,name:"Yuvi"}
];

username="bhavni";
myfirstclass="first";
mysecondclass="second";
isFirstClassAvailable=true;
myfirstclassarr=["first","second"];
myfirstclassObj={
  first:true,
  second:true
}
}
