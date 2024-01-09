import {Component, Injectable} from '@angular/core';
import {catchError, Observable, of, tap} from "rxjs";
import {JobDTO, JobTransactionDTO} from "./job";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MessageService} from './messages.service';
import {map} from "rxjs/operators";
import {environment} from "../../../../../environments/environment";


@Injectable()
export class JobService {

    // job URL to web api
    private jobUrl = environment.apiUrl + environment.job;
    // job transaction url to web api
    private jobTransactionUrl = environment.apiUrl + environment.jobTransaction;
    // profile url to web api
    private profileUrl = environment.apiUrl + environment.startMatchingOperation;

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(
        private http: HttpClient,
        private messageService: MessageService) { }


    /** GET jobs from the server */
    getJobs(): Observable<JobDTO[]> {
        return this.http.get<JobDTO[]>(this.jobUrl)
            .pipe(
                tap(_ => this.log("Info", 'fetched jobs')),
                catchError(this.handleError<JobDTO[]>('getJobs', []))
            );
    }

    /** GET job by id. Return `undefined` when id not found */
    getJobNo404<Data>(id: number): Observable<JobDTO> {
        const url = `${this.jobUrl}/?id=${id}`;
        return this.http.get<JobDTO[]>(url)
            .pipe(
                map(jobs => jobs[0]), // returns a {0|1} element array
                tap(h => {
                    const outcome = h ? 'fetched' : 'did not find';
                    this.log("Info", `${outcome} job id=${id}`);
                }),
                catchError(this.handleError<JobDTO>(`getJob id=${id}`))
            );
    }

    /** GET job by id. Will 404 if id not found */
    getJob(id: number): Observable<JobDTO> {
        const url = `${this.jobUrl}/${id}`;
        return this.http.get<JobDTO>(url).pipe(
            tap(_ => this.log("Info", `fetched job id=${id}`)),
            catchError(this.handleError<JobDTO>(`getJob id=${id}`))
        );
    }

    /** GET job by user id. Will 404 if id not found */
    getJobByUserId(userId: number): Observable<JobDTO[]>  {
        const url = `${this.jobUrl}/${userId}`;
        return this.http.get<JobDTO[]>(url)
            .pipe(
                tap(_ => this.log("Info", `fetched jobs userId=${userId}`)),
                catchError(this.handleError<JobDTO[]>(`getJobByUserId userId=${userId}`, []))
            );
    }

    getJobByUserIdAndJobStatus(userId: number, jobStatus: string): Observable<JobDTO[]>  {
        const url = `${this.jobUrl}/${userId}/${jobStatus}`;
        return this.http.get<JobDTO[]>(url)
            .pipe(
                tap(_ => this.log("Info", `fetched jobs userId=${userId} status=${jobStatus}`)),
                catchError(this.handleError<JobDTO[]>(`getJobByUserIdAndJobStatus userId=${userId} status=${jobStatus}`, []))
            );
    }

    getJobTransactionByJobStatus(jobStatus: string): Observable<JobTransactionDTO[]>  {
        const url = `${this.jobTransactionUrl}/${jobStatus}`;
        return this.http.get<JobTransactionDTO[]>(url)
            .pipe(
                tap(_ => this.log("Info", `fetched jobs transaction status=${jobStatus}`)),
                catchError(this.handleError<JobTransactionDTO[]>(`getJobTransactionByJobStatus status=${jobStatus}`, []))
            );
    }

    /* GET job whose title contains search term */
    searchJobs(term: string): Observable<JobDTO[]> {
        if (!term.trim()) {
            // if not search term, return empty job array.
            return of([]);
        }
        return this.http.get<JobDTO[]>(`${this.jobUrl}/?title=${term}`).pipe(
            tap(x => x.length ?
                this.log("Info",`found jobs matching "${term}"`) :
                this.log("Info",`no jobs matching "${term}"`)),
            catchError(this.handleError<JobDTO[]>('searchJobs', []))
        );
    }

    //////// Save methods //////////

    /** POST: add a new job to the server */
    addJob(job: JobDTO) {
        this.http.post<void>(this.jobUrl, job)
            .subscribe({
                error: (error) => {
                    console.error('Add job operation is failed', error);
                }
            });
    }


    /** DELETE: delete the job from the server */
    deleteJob(id: number): Observable<JobDTO> {
        const url = `${this.jobUrl}/${id}`;

        return this.http.delete<JobDTO>(url, this.httpOptions).pipe(
            tap(_ => this.log("Info", `deleted job title=${id}`)),
            catchError(this.handleError<JobDTO>('deleteJob'))
        );
    }

    /** PUT: update the job on the server */
    updateJob(job: JobDTO): Observable<any> {
        return this.http.put(this.jobUrl, job, this.httpOptions).pipe(
            tap(_ => this.log("Info", `updated job id=${job.jobTitle}`)),
            catchError(this.handleError<any>('updateJob'))
        );
    }



    /** POST: start matching operation */
    startMatchingOperation() {
        this.http.post<void>(this.profileUrl, null)
            .subscribe({
                error: (error) => {
                    console.error('Add job operation is failed', error);
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
