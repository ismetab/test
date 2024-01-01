import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {JobSeekersComponent} from './job-seekers.component';

@NgModule({
    imports: [RouterModule.forChild([
        {path: '', component: JobSeekersComponent}
    ])],
    exports: [RouterModule]
})
export class JobSeekersRoutingModule {
}
