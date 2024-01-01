import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication/authentication.service';
import {UserRole} from "../login/user.model";
import {environment} from "../../../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class UserGuard implements CanActivate {
    constructor(private authService: AuthenticationService, private router: Router) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        const userRoles = this.authService.getUserRoles();

        if (userRoles.includes(UserRole.USER)) {
            return true;
        } else {
            console.log(this.authService.getToken())
            this.router.navigate([environment.accessDenied]);
            return false;
        }
    }

}
