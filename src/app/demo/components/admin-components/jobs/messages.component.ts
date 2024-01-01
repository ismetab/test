import { Component } from '@angular/core';
import {MessageService} from './messages.service';

@Component({
    selector: 'app-admin-messages',
    templateUrl: './messages.component.html'
})

export class MessagesComponent {

    constructor(public messageService: MessageService) {}

}
