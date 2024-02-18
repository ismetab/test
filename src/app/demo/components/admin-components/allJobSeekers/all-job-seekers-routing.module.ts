import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AllJobSeekersComponent } from './all-job-seekers.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: AllJobSeekersComponent }
	])],
	exports: [RouterModule]
})
export class AllJobSeekersRoutingModule { }
