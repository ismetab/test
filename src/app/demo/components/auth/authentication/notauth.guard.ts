import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import {environment} from "../../../../../environments/environment"; // Update with the path to your service

@Injectable({
    providedIn: 'root'
})
export class NotAuthGuard implements CanActivate {
    constructor(private authService: AuthenticationService, private router: Router) {}

    canActivate(): boolean {
        if (!this.authService.isLoggedIn()) {
            // Redirect to the dashboard if the user is already logged in
            this.router.navigate([environment.loginPage]);
            return false;
        }
        return true;
    }
}
