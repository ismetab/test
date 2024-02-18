import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AddJobSeekersComponent} from './add-job-seekers.component';

@NgModule({
    imports: [RouterModule.forChild([
        {path: '', component: AddJobSeekersComponent}
    ])],
    exports: [RouterModule]
})
export class AddJobSeekersRoutingModule {
}
