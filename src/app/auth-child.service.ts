import {Injectable} from '@angular/core';
import {CanActivateChild} from "@angular/router";

@Injectable()
export class AuthChildService implements CanActivateChild {

  constructor() {
  }

  canActivateChild():boolean {
    return true
  }

}
