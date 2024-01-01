import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {DeniedJobsComponent} from './deniedJobs.component';

@NgModule({
    imports: [RouterModule.forChild([
        {path: '', component: DeniedJobsComponent}
    ])],
    exports: [RouterModule]
})
export class DeniedJobsRoutingModule {
}
