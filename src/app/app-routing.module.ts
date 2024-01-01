import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { AdminGuard } from './demo/components/auth/access/admin.guard';
import { NotAuthGuard } from "./demo/components/auth/authentication/notauth.guard";
import { UserGuard } from "./demo/components/auth/access/user.guard";
import {environment} from "../environments/environment";

@NgModule({
    imports: [
        RouterModule.forRoot([

            { path: environment.adminDashboard, component: AppLayoutComponent , canActivate: [NotAuthGuard, AdminGuard],
                children: [
                    { path: '', loadChildren: () => import('./demo/components/admin-components/admin.module').then(m => m.AdminModule), canActivate: [NotAuthGuard, AdminGuard]},
                ]
            },
            { path: environment.userDashboard, component: AppLayoutComponent , canActivate: [NotAuthGuard, UserGuard],
                children: [
                    { path: '', loadChildren: () => import('./demo/components/user-components/user.module').then(m => m.UserModule), canActivate: [NotAuthGuard, UserGuard]},
                ]
            },
            { path: '', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
