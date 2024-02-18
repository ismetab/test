import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PersonalInfo} from "../../profile.component";
import {environment} from "../../../../../../../environments/environment";
import {InfoService} from "../InfoService";
import {AbstractAdminService} from "./AbstractAdminService";

@Injectable({
    providedIn: 'root'
})
export class AdminPersonalInfoService extends AbstractAdminService implements InfoService<PersonalInfo> {

    constructor(private http: HttpClient) {
        super();
    }



    save(personalInfo: PersonalInfo): Observable<any> {
        return this.http.post(environment.apiUrl + environment.personalInfoUpdate + "?userId=" + this.getUserId(), personalInfo);
    }

    get(): Observable<PersonalInfo> {
        console.log("admin");
        return this.http.get<PersonalInfo>(environment.apiUrl + environment.personalInfoGet + "?userId="  + this.getUserId());
    }
}
