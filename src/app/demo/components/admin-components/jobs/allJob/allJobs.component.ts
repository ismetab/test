import {Component, OnInit} from '@angular/core';
import {JobService} from "../job.service";
import {JobDTO} from "../job";
import {AuthenticationService} from "../../../auth/authentication/authentication.service";

@Component({
    templateUrl: './allJobs.component.html',
    selector: 'app-admin-jobs'
})
export class AllJobsComponent implements OnInit {

    jobs: JobDTO[];
    selectedJobCompany: string = "";
    selectedJobName: string = "";
    selectedJobDescription: string = "";
    selectedJobLocationCity: string = "";
    selectedJobCompanyEmail: string = "";
    isFirstCall: boolean = true;

    constructor(private authService: AuthenticationService, private jobService: JobService) {
    }

    ngOnInit() {
        this.jobService.getJobs().subscribe(job => this.jobs = job)
    }

    onChange(event) {
        this.isFirstCall = false;
        this.selectedJobName = (<JobDTO>event.value).jobTitle;
        this.selectedJobCompany = (<JobDTO>event.value).companyName;
        this.selectedJobLocationCity = (<JobDTO>event.value).jobLocationCity;
        this.selectedJobCompanyEmail = (<JobDTO>event.value).companyEmail;
        this.selectedJobDescription = (<JobDTO>event.value).jobDescription;
    }
}
