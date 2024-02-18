import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../../../../../../environments/environment";
import {ProfessionalInfo} from "../../profile.component";
import {InfoService} from "../InfoService";
import {AbstractAdminService} from "./AbstractAdminService";

@Injectable({
    providedIn: 'root'
})
export class AdminProfessionalInfoService extends AbstractAdminService implements InfoService<ProfessionalInfo> {

    constructor(private http: HttpClient) {
        super();
    }


    save(professionalInfo: ProfessionalInfo): Observable<any> {
        return this.http.post(environment.apiUrl + environment.professionalInfoUpdate + "?userId=" + this.getUserId(), professionalInfo);
    }

    get(): Observable<ProfessionalInfo> {
        return this.http.get<ProfessionalInfo>(environment.apiUrl + environment.professionalInfoGet + "?userId="  + this.getUserId());
    }
}
