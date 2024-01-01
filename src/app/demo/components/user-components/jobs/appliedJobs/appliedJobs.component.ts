import {Component, OnInit} from '@angular/core';
import {JobService} from "../job.service";
import {JobTransactionDTO} from "../job";
import {AuthenticationService} from "../../../auth/authentication/authentication.service";

@Component({
    templateUrl: './appliedJobs.component.html',
    selector: 'app-appliedJobs'
})
export class AppliedJobsComponent implements OnInit {

    jobTransactions: JobTransactionDTO[];
    selectedJobCompany: string = "";
    selectedJobName: string = "";
    selectedJobDescription: string = "";
    isFirstCall: boolean = true;

    constructor(private authService: AuthenticationService, private jobService: JobService) {
    }

    ngOnInit() {
        this.jobService.getJobTransactionByUserIdAndJobStatus(this.authService.getId(), "APPLIED").subscribe(jobTransactions => this.jobTransactions = jobTransactions)
    }

    onChange(event) {
        this.isFirstCall = false;
        this.selectedJobName = (<JobTransactionDTO>event.value).job.jobTitle;
        this.selectedJobDescription = (<JobTransactionDTO>event.value).job.jobDescription;
    }
}
