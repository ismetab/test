import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../../../../../../../environments/environment";
import {AuthenticationService} from "../../../../auth/authentication/authentication.service";

@Injectable({
    providedIn: 'root'
})
export class AdminDocumentService {

    constructor(private http: HttpClient,
                private authService: AuthenticationService) { }

    getFiles(userId: number): Observable<Blob> {
        const url = environment.apiUrl + '/getDocuments?userId=' +userId;
        return this.http.get(url, { responseType: 'blob' });
    }

    getDocumentsByUserId(userId: number): Observable<any> {
        return this.http.get(environment.apiUrl + '/getDocumentsInfo?userId=' + userId);
    }

    deleteDocument(documentId: number, userId: number): Observable<any> {
        return this.http.delete(environment.apiUrl + '/deleteDocument?documentId=' + documentId + '&userId=' + userId);
    }

    uploadDocuments(files: File[], userId: number): Observable<any> {
        const formData = new FormData();
        files.forEach((file) => {
            formData.append('files', file, file.name);
        });

        formData.append('userId', this.authService.getId().toString());

        const url = environment.apiUrl + '/upload';
        return this.http.post(url, formData, { responseType: 'text' });
    }


}
