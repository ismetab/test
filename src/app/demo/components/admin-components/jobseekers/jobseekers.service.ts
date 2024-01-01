import {Injectable} from '@angular/core';
import {catchError, Observable, of, tap} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MessageService} from '../jobs/messages.service';
import {environment} from "../../../../../environments/environment";
import {User} from "../../auth/login/user.model";


@Injectable()
export class JobSeekerService {

    // job URL to web api
    private jobSeekerUrl = environment.apiUrl + environment.user;


    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(
        private http: HttpClient,
        private messageService: MessageService) { }


    /** GET job seekers (users) from the server */
    getJobSeekers(): Observable<User[]> {
        return this.http.get<User[]>(this.jobSeekerUrl)
            .pipe(
                tap(_ => this.log("Info", 'fetched jobSeekers')),
                catchError(this.handleError<User[]>('getJobSeekers', []))
            );
    }


    /**
     * Handle Http operation that failed.
     * Let the app continue.
     *
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log("Error", `${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    /** Log a JobService message with the MessageService */
    private log(severity:string, message: string) {
        this.messageService.add(`JobService: ${message}`)
    }
}
