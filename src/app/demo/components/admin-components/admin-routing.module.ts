import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {AdminGuard} from "../auth/access/admin.guard";

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', data: { breadcrumb: 'Charts' }, loadChildren: () => import('./charts/chartsdemo.module').then(m => m.ChartsDemoModule) },
        { path: 'addJob', data: { breadcrumb: 'addJob' }, loadChildren: () => import('./jobs/addJob/addJob.module').then(m => m.AddJobModule) },
        { path: 'allJobs', data: { breadcrumb: 'allJobs' }, loadChildren: () => import('./jobs/allJob/allJobs.module').then(m => m.AllJobsModule) },
        { path: 'matchedJobs', data: { breadcrumb: 'matchedJobs' }, loadChildren: () => import('./jobs/matchedJobs/matchedJobs.module').then(m => m.MatchedJobsModule) },
        { path: 'appliedJobs', data: { breadcrumb: 'appliedJobs' }, loadChildren: () => import('./jobs/appliedJobs/appliedJobs.module').then(m => m.AppliedJobsModule) },
        { path: 'deniedJobs', data: { breadcrumb: 'deniedJobs' }, loadChildren: () => import('./jobs/deniedJobs/deniedJobs.module').then(m => m.DeniedJobsModule) },
        { path: 'jobSeekers', data: { breadcrumb: 'allJobSeekers' }, loadChildren: () => import('./alljobseekers/all-job-seekers.module').then(m => m.AllJobSeekersModule) },
        { path: 'addJobSeekers', data: { breadcrumb: 'addJobSeekers' }, loadChildren: () => import('./addjobseekers/add-job-seekers.module').then(m => m.AddJobSeekersModule) },
        { path: 'adduser', data: { breadcrumb: 'adduser' }, loadChildren: () => import('./addjobseekers/add-job-seekers.module').then(m => m.AddJobSeekersModule) },
        { path: 'table', data: { breadcrumb: 'table' }, loadChildren: () => import('./table/tabledemo.module').then(m => m.TableDemoModule) },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
