import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../../../../../environments/environment";
import {ExperienceDTO} from "../profile.component";

@Injectable({
    providedIn: 'root'
})
export class ExperienceService {

    constructor(private http: HttpClient) { }

    save(experienceDTO: ExperienceDTO[], id: number): Observable<any> {
        return this.http.post(environment.apiUrl + environment.experienceUpdate + "?userId=" + id, experienceDTO);
    }

    get(userId: number): Observable<ExperienceDTO[]> {
        return this.http.get<ExperienceDTO[]>(environment.apiUrl + environment.experienceGet + "?userId="  + userId);
    }

}
