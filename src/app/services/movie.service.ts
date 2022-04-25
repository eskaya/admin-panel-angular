import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable }                    from '@angular/core';
import { Observable, throwError }        from 'rxjs';
import { retry, catchError }             from 'rxjs/operators';
import { getEndpoint }                   from '../../environments/environment';
import { HttpInterface }                 from '../../interfaces/http.interface';
import { MovieInterface }                from '../../interfaces/movie.interface';

@Injectable({
    providedIn: 'root',
})
export class MovieService {
    
    constructor(private http: HttpClient) { }
    
    public create(form: MovieInterface): Observable<HttpInterface<MovieInterface>> {
        return this.http
            .post<HttpInterface<MovieInterface>>(getEndpoint('api/movie'), form,
                { observe: 'body' },
            )
            .pipe(
                retry(1),
                catchError((error: HttpErrorResponse) => throwError(error.error)),
            );
    }
}
