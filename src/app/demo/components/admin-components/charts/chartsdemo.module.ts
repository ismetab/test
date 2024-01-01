import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsDemoRoutingModule } from './chartsdemo-routing.module';
import { ChartModule } from 'primeng/chart'
import { ChartsDemoComponent } from './chartsdemo.component';
import {ImageModule} from "primeng/image";
import {ScrollPanelModule} from "primeng/scrollpanel";

@NgModule({
    imports: [
        CommonModule,
        ChartsDemoRoutingModule,
        ChartModule,
        ImageModule,
        ScrollPanelModule
    ],
	declarations: [ChartsDemoComponent]
})
export class ChartsDemoModule { }
