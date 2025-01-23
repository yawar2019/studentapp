import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';

export interface IDeactivate
{
  canExist:()=>boolean
}

@Injectable({
  providedIn: 'root'
})
export class AppDeactiveGuardService implements CanDeactivate<IDeactivate> {

  constructor() { }
  canDeactivate(component: IDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean {
return component.canExist?component.canExist():true;
  }
}
