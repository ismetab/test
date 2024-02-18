import {Component, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ChipsModule} from "primeng/chips";
import {RadioButtonModule} from "primeng/radiobutton";
import {CalendarModule} from "primeng/calendar";
import {DividerModule} from "primeng/divider";
import {InputTextareaModule} from "primeng/inputtextarea";
import {NgForOf, NgIf} from "@angular/common";
import {RippleModule} from "primeng/ripple";
import {SplitButtonModule} from "primeng/splitbutton";
import {FileUploadHandlerEvent, FileUploadModule} from "primeng/fileupload";
import {ChildComponentBase} from "../../register.component";
import {RegisterDTO} from "../step-one/step-one.component";
import {environment} from "../../../../../../../environments/environment";

@Component({
    selector: 'app-step-document',
    templateUrl: './step-document.component.html',
    standalone: true,
    imports: [
        FormsModule,
        ChipsModule,
        RadioButtonModule,
        CalendarModule,
        ReactiveFormsModule,
        DividerModule,
        InputTextareaModule,
        NgForOf,
        NgIf,
        RippleModule,
        SplitButtonModule,
        FileUploadModule
    ],
    styles: [`
    `]
})

export class StepDocumentComponent implements OnInit, ChildComponentBase{
    data: RegisterDTO = null;
    files: File[] = [];
    ngOnInit() {
        // Accessing router state via ActivatedRoute
        const registerDTO = history.state.registerDTO;

        if (registerDTO) {
            console.log('Received resumeDTO:', registerDTO);
            this.data = registerDTO;
        } else {
            console.log('No resumeDTO received');
        }
    }


    myUploadHandler(event) {
         const files: File[] = event.files;
        if (this.files != undefined && this.files.length != 0) {
            this.files = this.files.concat(files);
        } else {
            this.files = files;
        }
    }

    get uploadedFileNames(): string[] {
        if (this.files != undefined && this.files.length != 0){
            return this.files.map(file => file.name);
        } else {
            return [""];
        }
    }

    getData() {
        return this.data;
    }

    getFiles(){
        return this.files;
    }

}
