import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../../../../../../environments/environment";
import {EducationDTO} from "../../profile.component";
import {InfoService} from "../InfoService";
import {AuthenticationService} from "../../../../auth/authentication/authentication.service";

@Injectable({
    providedIn: 'root'
})
export class UserEducationService implements InfoService<EducationDTO[]>{

    constructor(private http: HttpClient,
                private authService: AuthenticationService) { }

    save(experienceDTO: EducationDTO[]): Observable<any> {
        return this.http.post(environment.apiUrl + environment.educationUpdate + "?userId=" + this.authService.getId(), experienceDTO);
    }

    get(): Observable<EducationDTO[]> {
        return this.http.get<EducationDTO[]>(environment.apiUrl + environment.educationGet + "?userId="  + this.authService.getId());
    }

}
