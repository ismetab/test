import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AddJobComponent} from './addJob.component';

@NgModule({
    imports: [RouterModule.forChild([
        {path: '', component: AddJobComponent}
    ])],
    exports: [RouterModule]
})
export class AddJobRoutingModule {
}
