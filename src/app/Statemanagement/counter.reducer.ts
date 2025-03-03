import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset } from "./counter.actions";
 


export interface State  //declaration
{
count:number;
}

const intialState:State={//initiallization
    count: 0
}

export const counterReducer=createReducer(
    intialState,   //first parameter inital state object
    on(increment,state=>({...state,count:state.count+1})) ,              //second parater based on actions operation will happen
    on(decrement,state=>({...state,count:state.count-1})) ,              //second parater based on actions operation will happen
    on(reset,state=>({...state,count:0})) ,              //second parater based on actions operation will happen
)