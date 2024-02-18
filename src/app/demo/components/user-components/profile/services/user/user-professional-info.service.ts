import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../../../../../../environments/environment";
import {ProfessionalInfo} from "../../profile.component";
import {AuthenticationService} from "../../../../auth/authentication/authentication.service";
import {InfoService} from "../InfoService";

@Injectable({
    providedIn: 'root'
})
export class UserProfessionalInfoService implements InfoService<ProfessionalInfo>{

    constructor(private http: HttpClient,
                private authService: AuthenticationService) { }

    save(professionalInfo: ProfessionalInfo): Observable<any> {
        console.log(professionalInfo)
        return this.http.post(environment.apiUrl + environment.professionalInfoUpdate + "?userId=" + this.authService.getId(), professionalInfo);
    }

    get(): Observable<ProfessionalInfo> {
        return this.http.get<ProfessionalInfo>(environment.apiUrl + environment.professionalInfoGet + "?userId="  + this.authService.getId());
    }

}
