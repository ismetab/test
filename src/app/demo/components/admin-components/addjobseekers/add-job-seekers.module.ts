import {NgModule} from '@angular/core';
import {AddJobSeekersComponent} from "./add-job-seekers.component";
import {AddJobSeekerService} from "./addjobseekers.service";

@NgModule({
    imports: [],
    declarations: [AddJobSeekersComponent],
    providers: [AddJobSeekerService]
})
export class AddJobSeekersModule { }
