import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatchedJobsComponent} from './matchedJobs.component';

@NgModule({
    imports: [RouterModule.forChild([
        {path: '', component: MatchedJobsComponent}
    ])],
    exports: [RouterModule]
})
export class MatchedJobsRoutingModule {
}
