import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { AboutComponent } from '../about/about.component';
import {first, Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppHighlightTextColorDirective } from '../app-highlight-text-color.directive';
import { RedTextHighlightColorDirective } from '../red-text-highlight-color.directive';
import { AppServiceService } from '../app-service.service';
import { select, Store } from '@ngrx/store';
import { selectCount } from '../Statemanagement/counter.selector';
import { decrement, increment, reset } from '../Statemanagement/counter.actions';

@Component({
  selector: 'app-home',
  imports: [AppComponent,AboutComponent,FormsModule,CommonModule,AppHighlightTextColorDirective,RedTextHighlightColorDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  count$:Observable<number>;
alphabet="z";
message="";
isdirectavail=false;
carlist=['BMW','Tata','TesLa','Nano'];
sports=[
  {id:1,name:"Virat"},
  {id:2,name:"Bumrah"},
  {id:3,name:"Yuvi"}
];  


constructor(private app:AppServiceService,public store:Store){
 this.count$= this.store.select(selectCount);
}

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


login(){
this.app.setAuthDetails('true');
}


logout(){
  this.app.setAuthDetails('false');
}

onIncrement(){
  this.store.dispatch(increment());
}

onDecrement(){
  this.store.dispatch(decrement());
}
onReset(){
  this.store.dispatch(reset());
}

}
