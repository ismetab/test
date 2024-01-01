import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../../../../../environments/environment";
import {PersonalInfo} from "../profile.component";

@Injectable({
    providedIn: 'root'
})
export class PersonalInfoService {

    constructor(private http: HttpClient) { }

    save(personalInfo: PersonalInfo, id: number): Observable<any> {
        return this.http.post(environment.apiUrl + environment.personalInfoUpdate + "?userId=" + id, personalInfo);
    }

    get(userId: number): Observable<PersonalInfo> {
        return this.http.get<PersonalInfo>(environment.apiUrl + environment.personalInfoGet + "?userId="  + userId);
    }

}
