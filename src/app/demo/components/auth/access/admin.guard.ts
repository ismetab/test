import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication/authentication.service';
import {UserRole} from "../login/user.model";
import {environment} from "../../../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class AdminGuard implements CanActivate {
    constructor(private authService: AuthenticationService, private router: Router) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        const userRoles = this.authService.getUserRoles(); // Assume this returns an array of roles

        if (userRoles.includes(UserRole.ADMIN)) {
            // If the user has the 'admin' role, allow the route
            return true;
        } else {
            // Otherwise, redirect to a 'not authorized' page or back to home
            this.router.navigate([environment.accessDenied]);
            return false;
        }
    }

}
