import {Component, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ChipsModule} from "primeng/chips";
import {RadioButtonModule} from "primeng/radiobutton";
import {CalendarModule} from "primeng/calendar";
import {DividerModule} from "primeng/divider";
import {InputTextareaModule} from "primeng/inputtextarea";
import {NgForOf, NgIf} from "@angular/common";
import {RippleModule} from "primeng/ripple";
import {SplitButtonModule} from "primeng/splitbutton";
import {ChildComponentBase} from "../../register.component";
import {RegisterDTO} from "../step-one/step-one.component";

@Component({
    selector: 'app-step-education',
    templateUrl: './step-education.component.html',
    standalone: true,
    imports: [
        FormsModule,
        ChipsModule,
        RadioButtonModule,
        CalendarModule,
        ReactiveFormsModule,
        DividerModule,
        InputTextareaModule,
        NgForOf,
        NgIf,
        RippleModule,
        SplitButtonModule
    ],
    styles: [`
    `]
})

export class StepEducationComponent implements OnInit, ChildComponentBase{
    educations = [
        { startDate: null, endDate: null, institutionName: '', degree: '', description: '' }
    ];

    data: RegisterDTO = null;

    ngOnInit() {
        // Accessing router state via ActivatedRoute
        const registerDTO = history.state.registerDTO;

        if (registerDTO) {
            console.log('Received resumeDTO:', registerDTO);
            this.data = registerDTO;
            this.loadData();
        } else {
            console.log('No resumeDTO received');
        }
    }

    private loadData() {
        this.educations = this.data.educationList;
    }


    addEducation() {
        this.educations.push({ startDate: null, endDate: null, institutionName: '', degree: '', description: '' });
    }

    deleteEducation(index: number) {
        this.educations.splice(index, 1);
    }

    getData() {
        this.data.educationList = this.educations;
        return this.data;
    }
}
