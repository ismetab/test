import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DeniedJobsRoutingModule} from './deniedJobs-routing.module';
import {DeniedJobsComponent} from './deniedJobs.component';
import {ListboxModule} from "primeng/listbox";
import {ButtonModule} from "primeng/button";
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {ImageModule} from 'primeng/image';
import {JobService} from "../job.service";
import {StyleClassModule} from "primeng/styleclass";

@NgModule({
    imports: [
        CommonModule,
        DeniedJobsRoutingModule,
        ListboxModule,
        ButtonModule,
        ImageModule,
        ScrollPanelModule,
        StyleClassModule
    ],
    declarations: [DeniedJobsComponent],
    providers: [JobService]
})
export class DeniedJobsModule {
}
