import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddJobRoutingModule} from './addJob-routing.module';
import {AddJobComponent} from './addJob.component';
import {ListboxModule} from "primeng/listbox";
import {ButtonModule} from "primeng/button";
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {ImageModule} from 'primeng/image';
import {JobService} from "../job.service";
import {InputTextModule} from "primeng/inputtext";
import {ChipsModule} from "primeng/chips";
import {FormsModule} from "@angular/forms";
import {AutoCompleteModule} from "primeng/autocomplete";
import {CalendarModule} from "primeng/calendar";
import {DropdownModule} from "primeng/dropdown";
import {InputMaskModule} from "primeng/inputmask";
import {InputNumberModule} from "primeng/inputnumber";
import {CascadeSelectModule} from "primeng/cascadeselect";
import {MultiSelectModule} from "primeng/multiselect";
import {InputTextareaModule} from "primeng/inputtextarea";
import {SelectButtonModule} from "primeng/selectbutton";

@NgModule({
    imports: [
        CommonModule,
        AddJobRoutingModule,
        ListboxModule,
        ButtonModule,
        ImageModule,
        ScrollPanelModule,
        CommonModule,
        FormsModule,
        AutoCompleteModule,
        ChipsModule,
        DropdownModule,
        InputMaskModule,
        InputNumberModule,
        CascadeSelectModule,
        MultiSelectModule,
        InputTextareaModule,
        InputTextModule,
        SelectButtonModule
    ],
    declarations: [AddJobComponent],
    providers: [JobService]
})
export class AddJobModule {
}
