import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../../../../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class DocumentService {

    constructor(private http: HttpClient) { }

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
        for (let file of files) {
            formData.append('file', file, file.name);
        }

        formData.append('userId', userId.toString());

        const url = environment.apiUrl + '/upload';
        return this.http.post(url, formData);
    }


}
