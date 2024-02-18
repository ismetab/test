import { Observable } from 'rxjs';
import { HealthInfo } from '../profile.component';

export interface InfoService<T> {
    save(infoDTO: T): Observable<any>;
    get(): Observable<T>;
}
