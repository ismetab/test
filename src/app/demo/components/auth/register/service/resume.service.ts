import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {ResumeDTO} from "../sub-components/step-one/step-one.component"; // Adjust this import path as needed

@Injectable({
    providedIn: 'root'
})
export class ResumeService {
    // Base URL for the API
    private baseUrl = environment.apiUrl;

    constructor(private http: HttpClient) {}

    /**
     * Uploads the resume data and returns an Observable of ResumeDTO.
     * @param formData - The FormData containing the resume and other information to upload.
     * @returns An Observable of ResumeDTO.
     */
    uploadResume(formData: FormData): Observable<ResumeDTO> {
        const uploadUrl = `${this.baseUrl}/parseResume`; // Adjust the endpoint as necessary
        return this.http.post<ResumeDTO>(uploadUrl, formData);
    }
}
