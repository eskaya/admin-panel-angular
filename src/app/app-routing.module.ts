import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule }                           from '@angular/core';
import {
    NbAuthComponent,
    NbLoginComponent,
}                                             from '@nebular/auth';
import { AuthComponent }                      from './pages/auth/auth.component';
import { AuthGuard }                          from './services/auth.guard';

export const routes: Routes = [
    {
        path        : 'pages',
        canActivate : [ AuthGuard ],
        loadChildren: () => import('./pages/pages.module')
            .then(m => m.PagesModule),
    },
    {
        path     : 'auth',
        component: NbAuthComponent,
        children : [
            {
                path     : '',
                component: AuthComponent,
            },
            {
                path     : 'login',
                component: AuthComponent,
            },
        ],
    },
    { path: '', redirectTo: 'pages', pathMatch: 'full' },
    { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
    useHash: false,
};

@NgModule({
    imports: [ RouterModule.forRoot(routes, config) ],
    exports: [ RouterModule ],
})
export class AppRoutingModule {
}
