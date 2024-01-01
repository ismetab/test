import { Injectable } from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import { AuthenticationService } from './authentication.service';
import {Router} from "@angular/router";
import {environment} from "../../../../../environments/environment";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService, private router: Router) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Get the JWT token from the authentication service
        let token = this.authenticationService.getToken();
        if (token) {
            // Clone the request and set the new header
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }

        // Send the cloned request to the next handler in the chain
        return next.handle(request).pipe(
            catchError((error: HttpErrorResponse) => {
                console.log(error.status);
                if (error.status === 401) {
                    // If the response status code is 401 Unauthorized, the token is likely expired
                    // Here you can either refresh the token, or
                    // Redirect the user to the login page or show a modal asking them to re-login
                    this.authenticationService.logout();
                    this.router.navigate([environment.loginPage]);
                }
                // Propagate any other kind of error
                return throwError(error);
            })
        );
    }
}
