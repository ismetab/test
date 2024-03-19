import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AllJobSeekersComponent } from './all-job-seekers.component';
import { AllJobSeekersRoutingModule } from './all-job-seekers-routing.module';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { RippleModule } from 'primeng/ripple';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { SliderModule } from 'primeng/slider';
import { RatingModule } from 'primeng/rating';
import {DialogModule} from "primeng/dialog";
import {FileUploadModule} from "primeng/fileupload";
import {ProfileModule} from "../../user-components/profile/profile.module";

@NgModule({
    imports: [
        CommonModule,
        AllJobSeekersRoutingModule,
        FormsModule,
        TableModule,
        RatingModule,
        ButtonModule,
        SliderModule,
        InputTextModule,
        ToggleButtonModule,
        RippleModule,
        MultiSelectModule,
        DropdownModule,
        ProgressBarModule,
        ToastModule,
        DialogModule,
        FileUploadModule,
        ProfileModule
    ],
	declarations: [AllJobSeekersComponent]
})
export class AllJobSeekersModule { }
