import { Component,OnInit } from '@angular/core';
import {JobService} from "../job.service";
import {JobTransactionDTO} from "../job";
import {AuthenticationService} from "../../../auth/authentication/authentication.service";

@Component({
    templateUrl: './deniedJobs.component.html',
    selector: 'app-admin-deniedJobs'
})
export class DeniedJobsComponent implements OnInit {

    jobsTransaction: JobTransactionDTO[];
    selectedJobCompany: string = "";
    selectedJobName: string = "";
    selectedJobDescription: string = "";
    selectedUserName: string = "";
    selectedUserEmail: string = "";
    selectedUserMobilPhone: string = "";
    isFirstCall: boolean = true;

    constructor(private authService: AuthenticationService, private jobService: JobService) {}

    ngOnInit() {
        this.jobService.getJobTransactionByJobStatus("DENIED").subscribe(jobsTransaction => this.jobsTransaction = jobsTransaction)
    }

    onChange(event) {
        this.isFirstCall = false;
        this.selectedJobName = (<JobTransactionDTO>event.value).job.jobTitle;
        this.selectedJobCompany = (<JobTransactionDTO>event.value).job.companyName;
        this.selectedJobDescription = (<JobTransactionDTO>event.value).job.jobDescription;
        this.selectedUserName = (<JobTransactionDTO>event.value).user.fullname;
        this.selectedUserEmail = (<JobTransactionDTO>event.value).user.username;
        this.selectedUserMobilPhone = (<JobTransactionDTO>event.value).user.mobilPhone;
    }
}
