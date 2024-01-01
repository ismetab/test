import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AllJobsComponent} from './allJobs.component';

@NgModule({
    imports: [RouterModule.forChild([
        {path: '', component: AllJobsComponent}
    ])],
    exports: [RouterModule]
})
export class AllJobsRoutingModule {
}
