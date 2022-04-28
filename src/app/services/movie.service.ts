import { HttpClient, HttpErrorResponse }      from '@angular/common/http';
import { Injectable }                         from '@angular/core';
import { Observable, throwError, observable } from 'rxjs';
import { retry, catchError }                  from 'rxjs/operators';
import { getEndpoint }                        from '../../environments/environment';
import { HttpInterface }                          from '../../interfaces/http.interface';
import { MovieInterface, MovieResponseInterface } from '../../interfaces/movie.interface';

@Injectable({
    providedIn: 'root',
})
export class MovieService {
    
    constructor(private http: HttpClient) { }
    
    // Get All Movies
    public getAllMovies(params: any = {}): Observable<MovieResponseInterface[]> {
        return this.http
            .get<MovieResponseInterface[]>(getEndpoint('api/movie'),
                { observe: 'body' , params: params},
            )
            .pipe(
                retry(1),
                catchError((error: HttpErrorResponse) => throwError(error.error)),
            );
    }
    
    // Create Movie
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
    
    // Update Movie
    public update(form: MovieInterface, _id: string): Observable<HttpInterface<MovieInterface>> {
        return this.http
            .patch<HttpInterface<MovieInterface>>(getEndpoint('api/movie/update/') + _id, form,
                { observe: 'body' },
            )
            .pipe(
                retry(1),
                catchError((error: HttpErrorResponse) => throwError(error.error)),
            );
    }
    
    // Movie Detail
    public get(_id: string, params: any = {}): Observable<MovieInterface> {
        return this.http
            .get<MovieInterface>(getEndpoint('api/movie/detail/') + _id,
                { observe: 'body' },
                // if you have param -->     { observe: 'body', params: params.params }
            )
            .pipe(
                retry(1),
                catchError((error: HttpErrorResponse) => throwError(error.error)),
            );
    }
}
