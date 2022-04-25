import { HttpClient, HttpErrorResponse }         from '@angular/common/http';
import { Injectable }                            from '@angular/core';
import { Observable, throwError }                from 'rxjs';
import { retry, catchError }                     from 'rxjs/operators';
import { getEndpoint }                           from '../../environments/environment';
import { AuthInterface, LoginResponseInterface } from '../../interfaces/auth.interface';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    
    constructor(private http: HttpClient) { }
    
    // backendden gelecek datanın interfaceinin yazmalısın
    public authentication(form: AuthInterface): Observable<LoginResponseInterface> {
        return this.http
            .post<LoginResponseInterface>(getEndpoint('authenticate'), form,
                { observe: 'body' },
            )
            .pipe(
                retry(1),
                catchError((error: HttpErrorResponse) => throwError(error.error)),
            );
    }
    
    public logout() {
        localStorage.removeItem('token');
    }
}
