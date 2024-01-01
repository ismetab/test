import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppliedJobsRoutingModule} from './appliedJobs-routing.module';
import {AppliedJobsComponent} from './appliedJobs.component';
import {ListboxModule} from "primeng/listbox";
import {ButtonModule} from "primeng/button";
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {ImageModule} from 'primeng/image';
import {JobService} from "../job.service";

@NgModule({
    imports: [
        CommonModule,
        AppliedJobsRoutingModule,
        ListboxModule,
        ButtonModule,
        ImageModule,
        ScrollPanelModule
    ],
    declarations: [AppliedJobsComponent],
    providers: [JobService]
})
export class AppliedJobsModule {
}
