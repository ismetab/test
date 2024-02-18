import {AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild,} from '@angular/core';
import {LayoutService} from 'src/app/layout/service/app.layout.service';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {environment} from "../../../../../environments/environment";
import {MenuItem} from "primeng/api";
import {filter} from "rxjs";
import {RegisterDTO, StepOneComponent} from "./sub-components/step-one/step-one.component";
import {StepProfessionalComponent} from "./sub-components/step-professionel/step-professional.component";
import {StepHealthComponent} from "./sub-components/step-health/step-health.component";
import {StepExperienceComponent} from "./sub-components/step-expreience/step-experience.component";
import {StepEducationComponent} from "./sub-components/step-education/step-education.component";
import {StepDocumentComponent} from "./sub-components/step-document/step-document.component";
import {NgxSpinnerService} from "ngx-spinner";
import {AuthenticationService} from "../authentication/authentication.service";
import {UserDocumentService} from "../../user-components/profile/services/user/user-document.service";
import {UserRole} from "../login/user.model";
import { firstValueFrom } from 'rxjs';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, AfterViewInit, AfterViewChecked{
    @ViewChild(StepOneComponent) stepOneComponents: StepOneComponent;
    @ViewChild(StepProfessionalComponent, { static: false }) stepProfessionalComponents: StepProfessionalComponent;
    @ViewChild(StepHealthComponent, { static: false }) stepHealthComponent: StepHealthComponent;
    @ViewChild(StepExperienceComponent, { static: false }) stepExperienceComponent: StepExperienceComponent;
    @ViewChild(StepEducationComponent, { static: false }) stepEducationComponent: StepEducationComponent;
    @ViewChild(StepDocumentComponent, { static: false }) stepDocumentComponent: StepDocumentComponent;

    errorMessage: string = '';  // Add this line
    routeItems: MenuItem[] = [
        { label: 'Personal', routerLink: 'personal' },
        { label: 'Professional', routerLink: 'professional' },
        { label: 'Health', routerLink: 'health' },
        { label: 'Experience', routerLink: 'experience' },
        { label: 'Education', routerLink: 'education' },
        { label: 'Document', routerLink: 'documents' },
    ];

    password!: string;
    email!: string;
    mobilPhone!: string;
    fullName!: string;


    currentStep = 1;
    totalSteps = 3; // Update this based on the number of steps

    allChildComponents: any[] = [];

    constructor(
        public layoutService: LayoutService,
        private router: Router,
        private http: HttpClient,
        private activatedRoute: ActivatedRoute,
        private spinner: NgxSpinnerService,
        private authService: AuthenticationService,
        private documentService: UserDocumentService) {

    }

    ngOnInit() {
        this.updateCurrentStepBasedOnRoute();
        this.totalSteps = this.routeItems.length;
        // Also update the current step on every route change
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd)
        ).subscribe(() => {
            this.updateCurrentStepBasedOnRoute();
        });
    }

    ngAfterViewInit() {
        // After the view is initialized, populate the array with instances of all child components
        this.allChildComponents = [
            this.stepOneComponents, this.stepProfessionalComponents
            // Add instances of other child components to the array as needed
        ];
    }

    ngAfterViewChecked() {
        this.allChildComponents = [
            this.stepOneComponents, this.stepProfessionalComponents,
            this.stepHealthComponent, this.stepExperienceComponent,
            this.stepEducationComponent, this.stepDocumentComponent
        ];
    }


    updateCurrentStepBasedOnRoute() {
        // Get the current route path from the router
        let currentRoute = this.activatedRoute.snapshot;
        while (currentRoute.firstChild) {
            currentRoute = currentRoute.firstChild;
        }
        const currentPath = currentRoute.routeConfig?.path;

        // Find the index of the current path in routeItems
        const index = this.routeItems.findIndex(item => item.routerLink === currentPath);
        if (index !== -1) {
            this.currentStep = index+1;
        }
    }

    goToNext(): void {
        const nextRoute = this.routeItems[this.currentStep].routerLink;
        console.log(this.allChildComponents[this.currentStep-1]);
        let data = this.allChildComponents[this.currentStep-1].getData();
        this.currentStep++;

        let navigationExtras = {
            state: { registerDTO: data }
        };

        this.router.navigate(['register', nextRoute], navigationExtras);
    }

    goToPrevious(): void {
        if (this.currentStep > 1) {
            const nextRoute = this.routeItems[this.currentStep-2].routerLink;
            let data = this.allChildComponents[this.currentStep-1].getData();
            this.currentStep--;
            let navigationExtras = {
                state: { registerDTO: data }
            };
            this.router.navigate(['register', nextRoute], navigationExtras);
        }
    }

    async finishProcess() {
        this.spinner.show();
        try {
            const registerDTO: RegisterDTO = this.stepDocumentComponent.getData();
            const userId = await this.registerUser(registerDTO);
            await this.handleDocumentUpload(registerDTO, userId);
            await this.postRegistrationProcess(registerDTO);
        } catch (error) {
            this.handleError(error);
        } finally {
            this.spinner.hide();
        }
    }

    private async registerUser(registerDTO: RegisterDTO): Promise<number> {
        const response = await firstValueFrom(this.http.post<number>(`${environment.apiUrl}/registerUser`, registerDTO));
        console.log('Register Success');
        return response;
    }

    private async handleDocumentUpload(registerDTO: RegisterDTO, userId: number): Promise<void> {
        const files = this.stepDocumentComponent.getFiles();
        if (files.length > 0 && files.length < 10) {
            await firstValueFrom(this.documentService.uploadDocuments(files, userId));
            console.log('Documents uploaded successfully');
        }
    }

    private async postRegistrationProcess(registerDTO: RegisterDTO): Promise<void> {
        const userRole = this.authService.getUserRole();
        if (userRole === UserRole.ADMIN) {
            alert("User created successfully.");
            this.router.navigate(["register"]);
        } else {
            await this.performUserLogin(registerDTO.user.username, registerDTO.user.password);
        }
    }

    private async performUserLogin(username: string, password: string): Promise<void> {
        try {
            await firstValueFrom(this.authService.login(username, password));
            this.router.navigate(['/user']);
        } catch (error) {
            console.error('Login failed', error);
            alert('Login failed');
        }
    }
    private handleError(error: any): void {
        console.error('Error during registration process', error);
        this.errorMessage = 'An error occurred. Please try again.';
        alert(this.errorMessage);
    }


    goToDashboard() {
        this.router.navigate(['/']);
    }
}

export interface ChildComponentBase {
    getData(): RegisterDTO;
}
