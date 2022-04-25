import { Injectable }                                                                from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable }                                                                from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    
    constructor(
        private router: Router,
    ) {}
    
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        
        const logged = localStorage.getItem('token');
        
        if (logged) {
            return true;
        }
        
        this.router.navigate([ '/auth/login' ]);
        return false;
    }
    
    // if you have check request
    /*
     return this.authService.check().pipe(
            map((response: IResponseBody<LoginResponseInterface> ) => {
                return !!response._id;
            }),
            catchError((error) => {
                this.router.navigate(['/auth/login']);
                return throwError(error);
            })
        );
     */
}
