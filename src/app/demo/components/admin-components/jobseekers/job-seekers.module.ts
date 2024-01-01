import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JobSeekersRoutingModule} from './job-seekers-routing.module';
import {JobSeekersComponent} from './job-seekers.component';
import {ListboxModule} from "primeng/listbox";
import {ButtonModule} from "primeng/button";
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {ImageModule} from 'primeng/image';
import {JobSeekerService} from "./jobseekers.service";

@NgModule({
    imports: [
        CommonModule,
        JobSeekersRoutingModule,
        ListboxModule,
        ButtonModule,
        ImageModule,
        ScrollPanelModule
    ],
    declarations: [JobSeekersComponent],
    providers: [JobSeekerService]
})
export class JobSeekersModule {
}
