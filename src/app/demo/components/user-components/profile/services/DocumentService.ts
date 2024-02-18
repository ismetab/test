import { Observable } from 'rxjs';
import { HealthInfo } from '../profile.component';

export interface DocumentService<T> {
    save(infoDTO: T): Observable<any>;
    get(): Observable<T>;
}
