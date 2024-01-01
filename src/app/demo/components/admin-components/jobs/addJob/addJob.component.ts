import {Component, OnInit} from '@angular/core';
import {JobService} from "../job.service";
import {JobDTO} from "../job";
import {AuthenticationService} from "../../../auth/authentication/authentication.service";
import {environment} from "../../../../../../environments/environment";
import {SelectButtonChangeEvent} from "primeng/selectbutton";
import {HttpClient} from "@angular/common/http";

@Component({
    templateUrl: './addJob.component.html',
    selector: 'app-admin-add-job'
})
export class AddJobComponent implements OnInit {

    jobTypeOptions: any[] = [];
    job: JobDTO = <JobDTO>{ };

    companyName: string = "";
    companyAddress: string = "";
    companyEmail: string = "";
    jobTitle: string = "";
    jobDescription: string = "";
    jobLocationCity: string = "";
    jobType: any = "";


    constructor(private authService: AuthenticationService, private jobService: JobService, private http: HttpClient) {
    }

    ngOnInit() {
        this.jobTypeOptions = [
            { label: 'Full-Time', value: "Full_Time" },
            { label: 'Part-Time', value: "Part_Time" }
        ];
    }

    onAddJob() {
        const payload = {
            companyName : this.companyName,
            companyAddress :  this.companyAddress,
            companyEmail : this.companyEmail,
            jobTitle : this.jobTitle,
            jobDescription : this.jobDescription,
            jobLocationCity : this.jobLocationCity,
            jobType : this.jobType.value
        };
        console.log(payload);


        this.jobService.addJob(payload);
    }
}
