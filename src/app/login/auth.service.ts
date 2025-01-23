import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrl = 'https://your-api-url.com/auth';

    constructor(private http: HttpClient) {}

    login(username: string, password: string): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/login`, { username, password })
            .pipe(
                map(response => {
                    if (response && response.token) {
                        localStorage.setItem('currentUser', JSON.stringify(response));
                    }
                    return response;
                })
            );
    }

    logout(): void {
        localStorage.removeItem('currentUser');
    }

    isLoggedIn(): boolean {
        return localStorage.getItem('currentUser') !== null;
    }

    getToken(): string | null {
        const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
        return currentUser?.token || null;
    }
}