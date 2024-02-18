import {Injectable, Input} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../../../../../../environments/environment";
import {PersonalInfo, ProfessionalInfo} from "../../profile.component";
import {AuthenticationService} from "../../../../auth/authentication/authentication.service";
import {InfoService} from "../InfoService";

@Injectable({
    providedIn: 'root'
})
export class UserPersonalInfoService implements InfoService<PersonalInfo> {

    constructor(private http: HttpClient,
                private authService: AuthenticationService) { }

    save(personalInfo: PersonalInfo): Observable<any> {
        console.log("test");
        return this.http.post(environment.apiUrl + environment.personalInfoUpdate + "?userId=" + this.authService.getId(), personalInfo);
    }

    get(): Observable<PersonalInfo> {
        console.log("test");
        return this.http.get<PersonalInfo>(environment.apiUrl + environment.personalInfoGet + "?userId="  + this.authService.getId());
    }

    getPersonalInfo(queryParams: { page: number, size: number }): Observable<any> {
        // Ensure parameters are converted to strings for HttpParams
        let params = new HttpParams()
            .set('page', queryParams.page.toString()) // Convert number to string
            .set('size', queryParams.size.toString()); // Convert number to string

        return this.http.get<any>(`${environment.apiUrl}${environment.getAllUser}`, { params });
    }

    getNumberOfEntries(): Observable<number> {
        return this.http.get<number>(`${environment.apiUrl}${environment.getNumberOfEntries}`);
    }

    getNumberOfEntriesWithFilter(value: string): Observable<number> {

        return this.http.get<number>(`${environment.apiUrl}${environment.getNumberOfEntries}`);
    }
}
