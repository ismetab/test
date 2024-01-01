import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../../../../../environments/environment";
import {JobApplicationDTO} from "../tabledemo.component";

@Injectable({
    providedIn: 'root'
})
export class JobApplicationService {

    constructor(private http: HttpClient) {}

    getAllJobApplications(): Observable<any> {
        return this.http.get<JobApplicationDTO[]>(environment.apiUrl + environment.getJobApplications);
    }

    sendMail(jobApplicationDTO: JobApplicationDTO): Observable<any> {
        return this.http.post(environment.apiUrl + environment.sendMail, jobApplicationDTO);
    }

}
