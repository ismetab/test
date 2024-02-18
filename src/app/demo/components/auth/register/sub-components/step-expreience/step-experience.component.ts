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
import {ExperienceDTO, RegisterDTO} from "../step-one/step-one.component";

@Component({
    selector: 'app-step-experience',
    templateUrl: './step-experience.component.html',
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

export class StepExperienceComponent implements OnInit, ChildComponentBase{
    experiences: ExperienceDTO[] = [];

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
            // Handle missing data
        }
    }

    private loadData() {
        this.experiences = this.data.experienceList;
    }

    getData() {
        this.data.experienceList = this.experiences;
        return this.data;
    }
    addExperience() {
        var newInfo: ExperienceDTO = {
            startDate: undefined,
            endDate: undefined,
            companyName: "",
            position: "",
            description: "",
        };

        this.experiences.push(newInfo);
    }

    deleteExperience(index: number) {
        this.experiences.splice(index, 1);
    }
}
