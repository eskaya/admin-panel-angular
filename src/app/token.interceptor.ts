import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
}                     from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    
    constructor() {}
    
    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        
        let token: string = localStorage.getItem('token') || '';
        token = token ? token : '';
        
        if (request.method !== 'PUT') {
            request = request.clone({
                setHeaders: {
                    'x-access-token': token,
                },
            });
        }
        return next.handle(request);
    }
}

// handle() ile istek backend e iletilmeden araya giriyoruz
// service aracılığı ile de tokenı alabilirsin, bu da bi yöntem
// app.module de gerekli işlemleri atlama!
