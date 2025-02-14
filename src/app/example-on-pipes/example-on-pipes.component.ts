import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, PercentPipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ChangCasePipe } from '../chang-case.pipe';

@Component({
  selector: 'app-example-on-pipes',
  imports: [CurrencyPipe,UpperCasePipe,LowerCasePipe,TitleCasePipe,DatePipe,JsonPipe,SlicePipe,PercentPipe,ChangCasePipe],
  templateUrl: './example-on-pipes.component.html',
  styleUrl: './example-on-pipes.component.css'
})
export class ExampleOnPipesComponent {
price:number=123456789543.67898;
Fname:string='ravi';
Lname:string='VERMA';
MiddleName:string='kalYANRao';
currentDate:Date=new Date();

empObj:any={
  empName:'Sunil',
  age:26,
  emailId:'sun@gmail.com'
}

fruits:string[]=['apple','orange','mango','banana'];
mystring:string='great wall of india';
temp=0.23;
}
