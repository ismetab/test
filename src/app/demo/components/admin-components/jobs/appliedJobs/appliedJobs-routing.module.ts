import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AppliedJobsComponent} from './appliedJobs.component';

@NgModule({
    imports: [RouterModule.forChild([
        {path: '', component: AppliedJobsComponent}
    ])],
    exports: [RouterModule]
})
export class AppliedJobsRoutingModule {
}
