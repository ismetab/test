import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegisterRoutingModule} from './register-routing.module';
import {RegisterComponent} from './register.component';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PasswordModule} from 'primeng/password';
import {InputTextModule} from 'primeng/inputtext';
import {StepOneComponent} from "./sub-components/step-one/step-one.component";
import {CalendarModule} from "primeng/calendar";
import {InputTextareaModule} from "primeng/inputtextarea";
import {MultiSelectModule} from "primeng/multiselect";
import {RippleModule} from "primeng/ripple";
import {StepsModule} from "primeng/steps";
import {TabMenuModule} from "primeng/tabmenu";
import {RouterModule} from "@angular/router";
import {StepProfessionalComponent} from "./sub-components/step-professionel/step-professional.component";
import {DialogModule} from "primeng/dialog";
import {FileUploadModule} from "primeng/fileupload";
import {MessageModule} from "primeng/message";
import {StepHealthComponent} from "./sub-components/step-health/step-health.component";
import {StepEducationComponent,} from "./sub-components/step-education/step-education.component";
import {StepExperienceComponent} from "./sub-components/step-expreience/step-experience.component";
import {StepDocumentComponent} from "./sub-components/step-document/step-document.component";
import {NgxSpinnerModule} from "ngx-spinner";
import {ImageModule} from "primeng/image";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
    imports: [
        NgxSpinnerModule,
        CommonModule,
        RegisterRoutingModule,
        ButtonModule,
        InputTextModule,
        FormsModule,
        PasswordModule,
        CalendarModule,
        InputTextareaModule,
        MultiSelectModule,
        ReactiveFormsModule,
        RippleModule,
        StepsModule,
        TabMenuModule,
        StepProfessionalComponent,
        DialogModule,
        FileUploadModule,
        MessageModule,
        StepHealthComponent,
        StepEducationComponent,
        StepExperienceComponent,
        StepDocumentComponent,
        NgxSpinnerModule,
        ImageModule,
        MatIconModule
    ],
    declarations: [
        RegisterComponent,
        StepOneComponent,
    ],
    exports: [RouterModule, StepOneComponent]
})
export class RegisterModule { }
