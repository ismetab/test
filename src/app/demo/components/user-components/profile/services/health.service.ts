import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../../../../../environments/environment";
import {HealthInfo} from "../profile.component";

@Injectable({
    providedIn: 'root'
})
export class HealthService {

    constructor(private http: HttpClient) { }

    save(healthInfoDTO: HealthInfo, id: number): Observable<any> {
        return this.http.post(environment.apiUrl + environment.healthInfoUpdate + "?userId=" + id, healthInfoDTO);
    }

    get(userId: number): Observable<HealthInfo> {
        return this.http.get<HealthInfo>(environment.apiUrl + environment.healthInfoGet + "?userId="  + userId);
    }

}
