import { CommonModule } from '@angular/common';
import { Component,signal,computed,effect, Injector } from '@angular/core';

@Component({
  selector: 'app-signal-example',
  imports: [CommonModule],
  templateUrl: './signal-example.component.html',
  styleUrl: './signal-example.component.css'
})
export class SignalExampleComponent  {
  

  constructor(private injector:Injector)
  {
    effect(() => {
      console.log(this.count()+'is called using effect');
     });
    
  }

  count=signal(5);
 doublecount=computed(()=>this.count()*2);

 updateValue()
 {
 this.count.update((current)=>current+1);
 }




 users=signal([{name:'Alica'}]);

 addUser()
 {
  this.users.update(users => [...users, { name: 'new user' }]);
 }



 





}








// import { Component,DoCheck,OnChanges,OnInit,signal, SimpleChanges } from '@angular/core';

// @Component({
//   selector: 'app-signal-example',
//   imports: [],
//   templateUrl: './signal-example.component.html',
//   styleUrl: './signal-example.component.css'
// })
// export class SignalExampleComponent implements DoCheck {
//   result=0;
//   ngDoCheck(): void {
//     this.result =this.count()+1;
//   }

//   count=signal(1);
 
//   reset()
//   {
// this.count.set(0)//if u want to set new value  then use set function
//   }

//   increment()
//   {
// this.count.update((current)=>current+1);//if u want to update new value based on Previous value then use Update function
//   }
// }





// <p>signal-example works!</p>


// {{count()}}

// <button (click)="reset()">reset</button>
// <button (click)="increment()">increment</button>
 

// {{result}}