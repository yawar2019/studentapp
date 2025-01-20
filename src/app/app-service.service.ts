import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor() { }

  setAuthDetails(value:string){
    localStorage.setItem('validCred',value);
  }

  getAuthDetails(){
    return localStorage.getItem('validCred')?.toString();
  }
}
