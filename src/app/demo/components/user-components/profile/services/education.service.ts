import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../../../../../environments/environment";
import {EducationDTO} from "../profile.component";

@Injectable({
    providedIn: 'root'
})
export class EducationService {

    constructor(private http: HttpClient) { }

    save(experienceDTO: EducationDTO[], id: number): Observable<any> {
        return this.http.post(environment.apiUrl + environment.educationUpdate + "?userId=" + id, experienceDTO);
    }

    get(userId: number): Observable<EducationDTO[]> {
        return this.http.get<EducationDTO[]>(environment.apiUrl + environment.educationGet + "?userId="  + userId);
    }

}
