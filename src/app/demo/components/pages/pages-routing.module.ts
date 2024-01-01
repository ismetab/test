import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {AdminGuard} from "../auth/access/admin.guard";

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', loadChildren: () => import('./empty/emptydemo.module').then(m => m.EmptyDemoModule), canActivate: [AdminGuard] },
        { path: 'crud', loadChildren: () => import('./crud/crud.module').then(m => m.CrudModule) },
        { path: 'timeline', loadChildren: () => import('./timeline/timelinedemo.module').then(m => m.TimelineDemoModule) },
    ])],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
