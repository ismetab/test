import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { jwtDecode } from "jwt-decode";
import {environment} from "../../../../../environments/environment";
import {UserRole} from "../login/user.model";

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<AuthenticationResponseDTO | null>;
    public currentUser: Observable<AuthenticationResponseDTO | null>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<AuthenticationResponseDTO | null>(
            JSON.parse(localStorage.getItem(environment.keyForJwttoken) || '{}')
        );
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): AuthenticationResponseDTO | null {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string): Observable<AuthenticationResponseDTO> {
        return this.http.post<AuthenticationResponseDTO>(environment.apiUrl + environment.loginApiUrl, { username, password })
            .pipe(map(response => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem(environment.keyForJwttoken, JSON.stringify(response));
                this.currentUserSubject.next(response);
                return response;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem(environment.keyForJwttoken);
        this.currentUserSubject.next(null);
    }

    getToken(): string | null {
        const currentUser = this.currentUserValue;
        return currentUser ? currentUser.token : null;
    }

    getId(): number | null {
        const currentUser = this.currentUserValue;
        return currentUser ? currentUser.userId : null;
    }

    getUserRoles(): string[] {
        const token = this.getToken();
        if (token) {
            const decodedToken: any = jwtDecode(token);
            const roles = decodedToken.roles || [];

            // Convert roles to match the UserRole enum in Spring Boot
            return roles.map((role: string) => {
                switch(role) {
                    case UserRole.ADMIN:
                    case UserRole.USER:
                        return role;
                    default: return UserRole.ANONYMOUS;
                }
            });
        }
        return [UserRole.ANONYMOUS]; // Default to ANONYMOUS if no token or roles are found
    }

    isLoggedIn(): boolean {
        const token = this.getToken();
        if (token) {
            try {
                const decodedToken: any = jwtDecode(token);
                // Optionally check if the token is expired
                const isExpired = decodedToken.exp ? Date.now() >= decodedToken.exp * 1000 : false;
                if (isExpired) {
                    this.logout();
                }
                return !isExpired;
            } catch (error) {
                // If decoding fails, assume the token is invalid
                return false;
            }
        }
        return false;
    }

}

interface AuthenticationResponseDTO {
    username: string;
    token: string;
    role: string;
    userId: number;
}
