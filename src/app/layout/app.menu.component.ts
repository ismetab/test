import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import {Router} from "@angular/router";
import {AuthenticationService} from "../demo/components/auth/authentication/authentication.service";
import {UserRole} from "../demo/components/auth/login/user.model";
import {environment} from "../../environments/environment";

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService,
                private authService: AuthenticationService,
                private router: Router) { }

    ngOnInit() {

        const roles = this.authService.getUserRoles();

        if (roles.includes(UserRole.ADMIN)) {
            this.showMenuForAdmin();
        } else if (roles.includes(UserRole.USER)) {
            this.showMenuForUser();
        }
    }

    private showMenuForAdmin(){
        this.model.push(
            {
                label: 'Pages',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['./'] },
                    {
                        label: 'Jobs', icon: 'pi pi-fw pi-briefcase',
                        items: [
                            { label: 'Add Job', icon: 'pi pi-plus', routerLink: ['./addJob']},
                            { label: 'All Jobs', icon: 'pi pi-list', routerLink: ['./allJobs']},
                            { label: 'Matched Jobs', icon: 'pi pi-star', routerLink: ['./matchedJobs']},
                            { label: 'Applied Jobs', icon: 'pi pi-check', routerLink: ['./appliedJobs']},
                            { label: 'Denied Jobs', icon: 'pi pi-times', routerLink: ['./deniedJobs'] },
                        ]
                    },
                    {
                        label: 'JobSeekers', icon: 'pi pi-fw pi-list',
                        items: [
                            { label: 'All', icon: 'pi pi-id-card', routerLink: ['./jobSeekers']},
                            { label: 'Add User', icon: 'pi pi-plus', routerLink: ['/register']},
                        ]
                    },
                    {
                        label: 'Applied Jobs', icon: 'pi pi-fw pi-list',routerLink: ['./table'],

                    },
                    {
                        label: 'Logout',
                        icon: 'pi pi-fw pi-sign-out',
                        command: () => this.logout()
                    },
                ]
            });
    }

    private showMenuForUser() {
        this.model.push(
            {
                label: 'Pages',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['./'] },
                    {
                        label: 'Jobs', icon: 'pi pi-fw pi-briefcase',
                        items: [
                            { label: 'Recommended Jobs', icon: 'pi pi-star', routerLink: ['./matchedJobs']},
                            { label: 'Applied Jobs', icon: 'pi pi-check', routerLink: ['./appliedJobs']},
                            { label: 'Denied Jobs', icon: 'pi pi-times', routerLink: ['./deniedJobs'] },
                        ]
                    },
                    {
                        label: 'My profile',
                        icon: 'pi pi-fw pi-user',
                        routerLink: ['./profile']
                    },
                    {
                        label: 'Logout',
                        icon: 'pi pi-fw pi-sign-out',
                        command: () => this.logout()
                    },
                ]
            });
    }

    logout() {
        this.authService.logout(); // Call the logout method from your auth service
        this.router.navigate([environment.loginPage]); // Redirect to the login page after logout
    }


}
