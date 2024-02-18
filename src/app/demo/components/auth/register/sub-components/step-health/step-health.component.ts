import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ChipsModule} from "primeng/chips";
import {RadioButtonModule} from "primeng/radiobutton";
import {CalendarModule} from "primeng/calendar";
import {ChildComponentBase} from "../../register.component";
import {HealthInfoDTO, RegisterDTO, ResumeDTO} from "../step-one/step-one.component";
import {InputTextModule} from "primeng/inputtext";
import {CommonModule} from "@angular/common";

@Component({
    selector: 'app-step-health',
    templateUrl: './step-health.component.html',
    standalone: true,
    imports: [
        FormsModule,
        ChipsModule,
        RadioButtonModule,
        CalendarModule,
        ReactiveFormsModule,
        CommonModule,
        InputTextModule
    ],
    styles: [`
    `]
})

export class StepHealthComponent implements OnInit, ChildComponentBase, AfterViewChecked{
    // You can add any properties or methods you need here
    // For example:
    healthInfoDTO: HealthInfoDTO = new HealthInfoDTO(false, '', false, '');
    disableIllnessDetails: boolean = true;
    disableCurrentHealthDetails: boolean = true;

    data: RegisterDTO = null;


    onCurrentHealthChange(event: boolean): void {
        this.healthInfoDTO.currentlyHealthy = event;
        this.disableCurrentHealthDetails = !event;
    }

    onWorkRelatedIllnessChange(event: boolean): void {
        this.healthInfoDTO.sufferingWorkRelatedIllness = event;
        this.disableIllnessDetails = !event;
        console.log(this.healthInfoDTO.sufferingWorkRelatedIllness)
    }

    ngOnInit() {
        // Accessing router state via ActivatedRoute
        const registerDTO = history.state.registerDTO;

        if (registerDTO) {
            console.log('Received resumeDTO:', registerDTO);
            this.data = registerDTO;
            this.loadData();
        } else {
            console.log('No resumeDTO received');
            // Handle missing data
        }

    }        // Method to handle the form submission or any action

    ngAfterViewChecked() {
        if (this.data != undefined) {

        }
    }

    private loadData() {
        if (this.data.healthInfo.currentlyHealthy != undefined) {
            this.healthInfoDTO.currentlyHealthy = this.data.healthInfo.currentlyHealthy;
            this.healthInfoDTO.currentHealthDetails = this.data.healthInfo.currentHealthDetails;

        }

        if (this.data.healthInfo.sufferingWorkRelatedIllness != undefined) {
            this.healthInfoDTO.sufferingWorkRelatedIllness = this.data.healthInfo.sufferingWorkRelatedIllness;
            this.healthInfoDTO.workRelatedIllnessDetails = this.data.healthInfo.workRelatedIllnessDetails;
        }

    }


    submitStepOne() {

        // Handle the submission logic here
    }

    getData(): RegisterDTO {
        this.data.healthInfo = this.healthInfoDTO;
        return this.data;
    }

    saveHealthInfo() {

    }
}
