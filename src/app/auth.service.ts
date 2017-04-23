import { Injectable } from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";

@Injectable()
export class AuthService implements CanActivate {

  constructor(  private router: Router) {
    /*this.router.events.subscribe(s=>{
      debugger
    })*/

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    debugger
    /*if (state.url.split('/').slice(1)[0]=='t') {
      this.router.navigate(['/ovir/login']);
      return  false
    }*/
    return true
  }


}
