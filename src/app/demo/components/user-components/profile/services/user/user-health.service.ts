import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../../../../../../environments/environment";
import {HealthInfo} from "../../profile.component";
import {InfoService} from "../InfoService";
import {AuthenticationService} from "../../../../auth/authentication/authentication.service";

@Injectable({
    providedIn: 'root'
})
export class UserHealthService implements InfoService<HealthInfo>{

    constructor(private http: HttpClient,
                private authService: AuthenticationService) { }

    save(healthInfoDTO: HealthInfo): Observable<any> {
        return this.http.post(environment.apiUrl + environment.healthInfoUpdate + "?userId=" + this.authService.getId(), healthInfoDTO);
    }

    get(): Observable<HealthInfo> {
        return this.http.get<HealthInfo>(environment.apiUrl + environment.healthInfoGet + "?userId="  + this.authService.getId());
    }

}
