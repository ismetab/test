import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AllJobsRoutingModule} from './allJobs-routing.module';
import {AllJobsComponent} from './allJobs.component';
import {ListboxModule} from "primeng/listbox";
import {ButtonModule} from "primeng/button";
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {ImageModule} from 'primeng/image';
import {JobService} from "../job.service";

@NgModule({
    imports: [
        CommonModule,
        AllJobsRoutingModule,
        ListboxModule,
        ButtonModule,
        ImageModule,
        ScrollPanelModule
    ],
    declarations: [AllJobsComponent],
    providers: [JobService]
})
export class AllJobsModule {
}
