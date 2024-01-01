import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatchedJobsRoutingModule} from './matchedJobs-routing.module';
import {MatchedJobsComponent} from './matchedJobs.component';
import {ListboxModule} from "primeng/listbox";
import {ButtonModule} from "primeng/button";
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {ImageModule} from 'primeng/image';
import {JobService} from "../job.service";
import {MessagesComponent} from '../messages.component';


@NgModule({
    imports: [
        CommonModule,
        MatchedJobsRoutingModule,
        ListboxModule,
        ButtonModule,
        ImageModule,
        ScrollPanelModule
    ],
    declarations: [MatchedJobsComponent, MessagesComponent],
    providers: [JobService]
})
export class MatchedJobsModule {
}
