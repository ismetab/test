import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../auth/authentication/authentication.service';
import {JobSeekerService} from "./jobseekers.service";
import {User} from "../../auth/login/user.model";

@Component({
    templateUrl: './job-seekers.component.html',
    selector: 'app-appliedJobs'
})
export class JobSeekersComponent implements OnInit {

    jobSeekers: User[];
    selectedUserName: string = "";
    selectedFullName: string = "";
    selectedMobilPhone: string = "";
    isFirstCall: boolean = true;

    constructor(private authService: AuthenticationService, private jobSeekerService: JobSeekerService) {
    }

    ngOnInit() {
        this.jobSeekerService.getJobSeekers().subscribe(jobSeekers => this.jobSeekers = jobSeekers)
    }

    onChange(event) {
        this.isFirstCall = false;
        this.selectedUserName = (<User>event.value).username;
        this.selectedFullName = (<User>event.value).fullname;
        this.selectedMobilPhone = (<User>event.value).mobilPhone;
    }
}
