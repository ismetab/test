import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../../../../../../environments/environment";
import {ExperienceDTO} from "../../profile.component";
import {InfoService} from "../InfoService";
import {AuthenticationService} from "../../../../auth/authentication/authentication.service";
import {AbstractAdminService} from "./AbstractAdminService";

@Injectable({
    providedIn: 'root'
})
export class AdminExperienceService extends AbstractAdminService implements InfoService<ExperienceDTO[]>{

    constructor(private http: HttpClient) {
        super();
    }

    save(experienceDTO: ExperienceDTO[]): Observable<any> {
        return this.http.post(environment.apiUrl + environment.experienceUpdate + "?userId=" + this.getUserId(), experienceDTO);
    }

    get(): Observable<ExperienceDTO[]> {
        return this.http.get<ExperienceDTO[]>(environment.apiUrl + environment.experienceGet + "?userId="  + this.getUserId());
    }

}
