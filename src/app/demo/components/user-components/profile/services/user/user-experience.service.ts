import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../../../../../../environments/environment";
import {ExperienceDTO} from "../../profile.component";
import {InfoService} from "../InfoService";
import {AuthenticationService} from "../../../../auth/authentication/authentication.service";

@Injectable({
    providedIn: 'root'
})
export class UserExperienceService implements InfoService<ExperienceDTO[]>{

    constructor(private http: HttpClient,
                private authService: AuthenticationService) { }

    save(experienceDTO: ExperienceDTO[]): Observable<any> {
        return this.http.post(environment.apiUrl + environment.experienceUpdate + "?userId=" + this.authService.getId(), experienceDTO);
    }

    get(): Observable<ExperienceDTO[]> {
        return this.http.get<ExperienceDTO[]>(environment.apiUrl + environment.experienceGet + "?userId="  + this.authService.getId());
    }

}
