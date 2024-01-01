import { Component,OnInit } from '@angular/core';
import {JobService} from "../job.service";
import {JobTransactionDTO} from "../job";
import {AuthenticationService} from "../../../auth/authentication/authentication.service";

@Component({
    templateUrl: './deniedJobs.component.html',
    selector: 'app-deniedJobs'
})
export class DeniedJobsComponent implements OnInit {

    jobTransactions: JobTransactionDTO[];
    selectedJobCompany: string = "";
    selectedJobName: string = "";
    selectedJobDescription: string = "";
    isFirstCall: boolean = true;

    constructor(private authService: AuthenticationService, private jobService: JobService) {}

    ngOnInit() {
        this.jobService.getJobTransactionByUserIdAndJobStatus(this.authService.getId(), "DENIED").subscribe(jobTransactions => this.jobTransactions = jobTransactions)
    }

    onChange(event) {
        this.isFirstCall = false;
        this.selectedJobName = (<JobTransactionDTO>event.value).job.jobTitle;
        this.selectedJobDescription = (<JobTransactionDTO>event.value).job.jobDescription;
    }
}
