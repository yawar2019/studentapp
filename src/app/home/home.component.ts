import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { AboutComponent } from '../about/about.component';
import { first } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [AppComponent,AboutComponent,FormsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
alphabet="z";
isdirectavail=false;
carlist=['BMW','Tata','TesLa','Nano'];
sports=[
  {id:1,name:"Virat"},
  {id:2,name:"Bumrah"},
  {id:3,name:"Yuvi"}
];

username="Ananad";
TwoWayBindVar="Hello two way bind";
myfirstclass="first";
mysecondclass="second"; 
isFirstClassAvailable=false;
myfirstclassarr=["first","second"];
myfirstclassObj={
  first:true,
  second:true
}
myFirstcolor='Green';
myAllStyle={
  "color":"Yellow",
  "background-color":"blue"
}


fun1()
{
   this.username="Ravi";
}

fun2(name:string)
{
  alert('hello world '+name);
}

fun3(event:any)
{
  console.log(event);
}

Myfun(val:string)
{

  alert(val);
}

}
