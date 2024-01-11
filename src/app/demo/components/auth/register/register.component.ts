import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";
import {environment} from "../../../../../environments/environment";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class RegisterComponent {

    valCheck: string[] = ['remember'];
    errorMessage: string = '';  // Add this line

    password!: string;
    email!: string;
    mobilPhone!: string;
    fullName!: string;
    constructor(public layoutService: LayoutService, private router: Router, private http: HttpClient) { }

    onRegister() {
        const payload = {
            email: this.email,
            password: this.password,
            mobilPhone: this.mobilPhone,
            fullName: this.fullName
        };

        this.http.post<void>('http://localhost:8080/register', payload)
            .subscribe({
                next: () => {
                    this.router.navigate([environment.loginPage]);
                },
                error: (error) => {
                    console.error('Register failed', error);
                    this.errorMessage = 'Register failed. Please check your inputs and try again.';
                }
            });
    }
}
