import {Component, OnInit} from '@angular/core';
import {MultiSelectModule} from "primeng/multiselect";
import {SelectButtonModule} from "primeng/selectbutton";
import {CheckboxModule} from "primeng/checkbox";
import {InputTextareaModule} from "primeng/inputtextarea";
import {InputTextModule} from "primeng/inputtext";
import {ProfessionalInfoDTO, RegisterDTO} from "../step-one/step-one.component";
import {FormsModule} from "@angular/forms";
import {ChildComponentBase} from "../../register.component";
import {SelectItem} from "primeng/api";
import {CountryService} from "../../../../../service/country.service";

@Component({
    selector: 'app-step-professional',
    templateUrl: './step-professional.component.html',
    standalone: true,
    imports: [
        MultiSelectModule,
        SelectButtonModule,
        CheckboxModule,
        InputTextareaModule,
        InputTextModule,
        FormsModule
    ],
    styles: [``]
})

export class StepProfessionalComponent  implements OnInit, ChildComponentBase{
    // You can add any properties or methods you need here
    // For example:
    fullName: string = '';
    paymentOptions: any[] = [
        "Full-time", "Part-time"
    ];
    data: RegisterDTO = null;
    professionalInfo: ProfessionalInfoDTO = {
        professionalKnowledge: '',
        maximumTravelTime: '',
        noticePeriodDays: '',
        expectedSalary: '',
        jobLocations: [],
        jobTypes: [],
        driversLicenseCategory: [],
        ga: undefined // Initialize it as a string, assuming it's used as a string
    };
    driverLicenseCategories = ["None","A1", "A2", "A", "B", "B1", "BE", "C1", "C1E", "C", "CE", "D1", "D1E", "D", "DE", "F", "G", "M"];
    countries: any[] = [];
    cities: SelectItem[] = [];

    constructor(private countryService: CountryService) {
    }

    ngOnInit() {

        this.countryService.getCities().then(cities => {
            this.cities = cities;
        });
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
        this.professionalInfo = this.data.professionalInfo;
    }

    getData() {
        this.data.professionalInfo = this.professionalInfo;
        return this.data;
    }
    // Method to handle the form submission or any action
    submitStepOne() {
        console.log("Full Name: ", this.fullName);
        // Handle the submission logic here
    }


}
