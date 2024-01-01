import {Component, Injectable} from '@angular/core';
import {catchError, Observable, of, tap} from "rxjs";
import {JobDTO, JobTransactionDTO} from "./job";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MessageService} from './messages.service';
import {map} from "rxjs/operators";
import {environment} from "../../../../../environments/environment";


@Injectable()
export class JobService {

    // URL to web api
    private jobUrl = environment.apiUrl + environment.job;

    private userJobTransactionUrl = environment.apiUrl + environment.jobTransaction;

    private userJobTransactionUpdateUrl = environment.apiUrl + environment.jobTransactionUpdate;

    private userIdURl: string ="userId";

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(
        private http: HttpClient,
        private messageService: MessageService) { }


    /**
     * Returns job transaction list according to userId and job status.
     * @param userId user ID
     * @param jobStatus job status
     */
    getJobTransactionByUserIdAndJobStatus(userId: number, jobStatus: string): Observable<JobTransactionDTO[]>  {
        const url = `${this.userJobTransactionUrl}/${userId}/${jobStatus}`;
        return this.http.get<JobTransactionDTO[]>(url)
            .pipe(
                tap(_ => this.log("Info", `fetched jobs userId=${userId} jobStatus=${jobStatus}` )),
                catchError(this.handleError<JobTransactionDTO[]>(`getJobByUserIdAndJobStatus userId=${userId} jobStatus=${jobStatus}`, []))
            );
    }

    /**
     * Update job transaction according to transaction Id.
     * @param transactionId
     * @param jobTransactionDTO
     */
    updateJobTransactionByTransactionId(transactionId: number, jobTransactionDTO: JobTransactionDTO): void {
        const url = `${this.userJobTransactionUpdateUrl}/${transactionId}`;
        console.log(url);
        this.http.put<JobTransactionDTO[]>(url, jobTransactionDTO, this.httpOptions).subscribe({
            error: (error) => {
                console.error('Update job transaction operation is failed', error);
            }
        });
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
