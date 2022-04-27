import { NgModule }            from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
    NbMenuModule,
    NbCardModule,
    NbInputModule,
    NbFormFieldModule,
    NbIconModule,
    NbButtonModule,
    NbSelectModule,
}                              from '@nebular/theme';

import { ThemeModule }         from '../@theme/theme.module';
import { PagesComponent }      from './pages.component';
import { DashboardModule }     from './dashboard/dashboard.module';
import { ECommerceModule }     from './e-commerce/e-commerce.module';
import { PagesRoutingModule }  from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { AuthComponent }       from './auth/auth.component';
import { AdminComponent }      from './admin/admin.component';
import { MovieComponent }      from './movie/movie.component';
import { MovieListComponent } from './movie-list/movie-list.component';

@NgModule({
    imports     : [
        PagesRoutingModule,
        ThemeModule,
        NbMenuModule,
        DashboardModule,
        ECommerceModule,
        MiscellaneousModule,
        NbCardModule,
        NbInputModule,
        NbFormFieldModule,
        NbIconModule,
        NbButtonModule,
        ReactiveFormsModule,
        NbSelectModule,
    ],
    declarations: [
        PagesComponent,
        AuthComponent,
        AdminComponent,
        MovieComponent,
        MovieListComponent,
    ],
})
export class PagesModule {
}
