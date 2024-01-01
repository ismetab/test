import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import {Utils} from "../../../../../utils/Utils"; // Update with the path to your service

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthenticationService, private router: Router) {}

    canActivate(): boolean {
        if (this.authService.isLoggedIn()) {
            let userRoles = this.authService.getUserRoles();

            this.router.navigate([Utils.getDashboardURL(userRoles)]);
            return false;
        }
        return true;
    }
}
