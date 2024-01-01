import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import {Router} from "@angular/router";
import {AuthenticationService} from "../authentication/authentication.service";
import {environment} from "../../../../../environments/environment";
import {Utils} from "../../../../../utils/Utils";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent {

    valCheck: string[] = ['remember'];
    errorMessage: string = '';

    password!: string;
    email!: string;

    constructor(
        public layoutService: LayoutService,
        private router: Router,
        private authService: AuthenticationService
    ) { }

    onSubmit() {
        this.authService.login(this.email, this.password).subscribe({
            next: (response) => {
                console.log('Login successful', response);
                this.router.navigate([Utils.getDashboardURL(this.authService.getUserRoles())]);

            },
            error: (error) => {
                console.error('Login failed', error);
                this.errorMessage = 'Login failed. Please check your credentials and try again.';
            }
        });
    }

    protected readonly environment = environment;
}
