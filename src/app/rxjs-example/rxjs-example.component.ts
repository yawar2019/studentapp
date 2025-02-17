import { Component } from '@angular/core';
import { concatMap, delay,debounce, filter, interval, map, mergeMap, Observable, of, Subscriber, switchMap, take, debounceTime, scan, fromEvent } from 'rxjs';
@Component({
  selector: 'app-rxjs-example',
  imports: [],
  templateUrl: './rxjs-example.component.html',
  styleUrl: './rxjs-example.component.css'
})
export class RxjsExampleComponent {

  constructor()
  {
  // this.fetchData().
  //  then(data=>{console.log('sucess '+data)})
  //  .catch(error=>{console.error('failure '+error);})
  //  ;
   


  //this.ExampleObservable();
//this.ExObserComplete_Error();
//this.OperatorExample();
//this.OperatorExample2();
//this.OperatorExample3();
//this.OperatorExample4();
this.OperatorExample6();
  }

   fetchData() {
    let age=18;
    return new Promise((resolve,reject)=>{
      if(age==18){
        setTimeout(()=>
        {
      resolve('data is successfully return:'+ age);
      console.log('hi');

        }
    ),12000}
      else{
  reject('Error Occured because of age is less then 18:'+age);  
  }})
  }

  ExampleObservable(){
    let observable=new Observable(
      (sub)=>{
        sub.next("my first value of observable");
        sub.next("my second value of observable");
      }
    )
    observable.subscribe(x=>console.log(x));

  }

//next() is used to send values like number,string,object etc..
//complete() is used to indicate next method completed its work
//error method is used to notifiy about error.


ExObserComplete_Error()
{
  var observable=new Observable(
    (sub)=>{
      try
      {
sub.next("my first observable");
sub.next("my second observable");
sub.complete();
      }
      catch(e)
      {
sub.error(e);
      }
    }
  )

  observable.subscribe(
    x=>console.log(x),
    (e)=>console.log(e),
    ()=>console.log("observable completed"))}






OperatorExample()
{

  const numbers=of(1,2,3,4,5);

  const result=numbers.pipe(
 map(num=>num*2),
 //filter(num=>num>=10)
 take(3)
  )
  result.subscribe(x=>console.log(x));
}


OperatorExample2()
{

  const intervalObservable=interval(5000).pipe(
    take(5)
  )

  intervalObservable.subscribe({
next:value=>console.log('Emitted Value:',value),
complete:()=>console.log('observable Completed')
  })

}

OperatorExample3()
{

  const numbers=of(1,2,3);

  const result=numbers.pipe(
    concatMap(value=>of(`Number:${value}`).pipe(delay(3000)))
  )
  result.subscribe(x=>console.log(x));

}


OperatorExample4()
{

  const numbers=interval(1000);

  const result=numbers.pipe(
    switchMap(value=>of(`Number:${value}`)
    //.pipe(take(1))
    .pipe(filter(value=>value.includes('20')))
    )
  )
  result.subscribe(x=>console.log(x));

}


OperatorExample5()
{

  const numbers=of(1,2,3);

  const result=numbers.pipe(
    mergeMap(value=>interval(5000).pipe(take(5)))
    //.pipe(take(1))
     
    
  )
  result.subscribe(x=>console.log(x));

}
//debounce type operator:only emits the level of value specified oamount of time


OperatorExample6()
{

  
const clicks = fromEvent(document, 'click');
const result = clicks.pipe(
  scan(i => ++i, 1),
  debounce(i => interval(200 * i))
);
result.subscribe(x => console.log(x));
}
}