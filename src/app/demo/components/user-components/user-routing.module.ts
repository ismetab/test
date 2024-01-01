import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {AdminGuard} from "../auth/access/admin.guard";

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', data: { breadcrumb: 'Media' }, loadChildren: () => import('./../user-dashboard/dashboard.module').then(m => m.DashboardModule) },
        { path: 'matchedJobs', data: { breadcrumb: 'matchedJobs' }, loadChildren: () => import('./jobs/matchedJobs/matchedJobs.module').then(m => m.MatchedJobsModule) },
        { path: 'appliedJobs', data: { breadcrumb: 'appliedJobs' }, loadChildren: () => import('./jobs/appliedJobs/appliedJobs.module').then(m => m.AppliedJobsModule) },
        { path: 'deniedJobs', data: { breadcrumb: 'deniedJobs' }, loadChildren: () => import('./jobs/deniedJobs/deniedJobs.module').then(m => m.DeniedJobsModule) },
        { path: 'profile', data: { breadcrumb: 'profile' }, loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class UserRoutingModule { }
