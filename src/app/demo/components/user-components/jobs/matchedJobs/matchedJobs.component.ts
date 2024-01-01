import {Component, OnInit} from '@angular/core';
import {JobService} from "../job.service";
import {JobTransactionDTO} from "../job";
import {AuthenticationService} from "../../../auth/authentication/authentication.service";

@Component({
    templateUrl: './matchedJobs.component.html',
    selector: 'app-matchedJobs'
})
export class MatchedJobsComponent implements OnInit {

    jobTransactions: JobTransactionDTO[];
    selectedJobTransaction: JobTransactionDTO;
    isFirstCall: boolean = true;

    constructor(private authService: AuthenticationService, private jobService: JobService) {
    }

    ngOnInit() {
        this.jobService.getJobTransactionByUserIdAndJobStatus(this.authService.getId(), "MATCHED").subscribe(jobTransactions => this.jobTransactions = jobTransactions)
    }

    onChange(event) {
        this.isFirstCall = false;
        this.selectedJobTransaction = <JobTransactionDTO>event.value;
    }

    onApplyJob() {
        this.selectedJobTransaction.jobStatus = "APPLIED";
        this.jobService.updateJobTransactionByTransactionId(this.selectedJobTransaction.transactionId, this.selectedJobTransaction);
        this.jobTransactions = this.jobTransactions.filter(item => item !== this.selectedJobTransaction);
    }

    onDenyJob() {
        this.selectedJobTransaction.jobStatus = "DENIED";
        this.jobService.updateJobTransactionByTransactionId(this.selectedJobTransaction.transactionId, this.selectedJobTransaction);
        this.jobTransactions = this.jobTransactions.filter(item => item !== this.selectedJobTransaction);
    }
}
