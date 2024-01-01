import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../../../../../../environments/environment";
import { ProfessionalInfo } from "../profile.component";

@Injectable({
    providedIn: 'root'
})
export class ProfessionalInfoService {

    constructor(private http: HttpClient) { }

    save(professionalInfo: ProfessionalInfo, id: number): Observable<any> {
        console.log(professionalInfo)
        return this.http.post(environment.apiUrl + environment.professionalInfoUpdate + "?userId=" + id, professionalInfo);
    }

    get(userId: number): Observable<ProfessionalInfo> {
        return this.http.get<ProfessionalInfo>(environment.apiUrl + environment.professionalInfoGet + "?userId="  + userId);
    }

}
