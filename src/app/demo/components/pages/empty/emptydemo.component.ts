import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from "../../../../../environments/environment";

@Component({
    templateUrl: './emptydemo.component.html'
})
export class EmptyDemoComponent implements OnInit {

    constructor(private http: HttpClient) { }

    ngOnInit(): void {

        this.http.get<string>(environment.apiUrl + '/test', { responseType: 'text' as 'json' })
            .subscribe({
                next: response => {
                    console.log('API response', response);
                },
                error: error => {
                    console.error('API error', error);
                }
            });
    }
}
