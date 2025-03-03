import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "./counter.reducer";


export const selectCounter=createFeatureSelector<State>('counter');//create store 
export const selectCount=createSelector(selectCounter,(state:State)=>state.count);//reterive data from store