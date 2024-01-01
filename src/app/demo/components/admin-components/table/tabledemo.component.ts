import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Representative} from 'src/app/demo/api/customer';
import {CustomerService} from 'src/app/demo/service/customer.service';
import {Product} from 'src/app/demo/api/product';
import {ProductService} from 'src/app/demo/service/product.service';
import {Table} from 'primeng/table';
import {ConfirmationService, MessageService} from 'primeng/api';
import {JobApplicationService} from "./services/job-application.service";

interface expandedRows {
    [key: string]: boolean;
}

@Component({
    templateUrl: './tabledemo.component.html',
    providers: [MessageService, ConfirmationService]
})

export class TableDemoComponent implements OnInit {
    mailSidebar: boolean = false;
    profileSidebar: boolean = false;
    isEditMode: boolean = false;

    mailSidebarStyles = {
        height: '60%',
        width: '60%', /* Sidebar takes 80% of the viewport width */
        left: '20%', /* Start from 10% of the viewport width from the left */
        'border-radius': '15px' /* Rounded corners */
    };
    selectedMail = { recipient: '', subject: '', body: '', attachedFiles:'' };

   mail_input = {
    width: '100%',     /* Make the profile take full width */
    padding: '8px',    /* Add some padding for aesthetics */
    'box-sizing' : 'border-box' /* Include padding in the width calculation */
    };

    mail_textarea = {
        height: '150px',
        width: '100%'
    }



    mail = {recipient: '', subject: '', body: '', attachedFiles:''};

    customers1: JobApplicationDTO[] = [];

    representatives: Representative[] = [];

    statuses: any[] = [];

    products: Product[] = [];


    expandedRows: expandedRows = {};


    isExpanded: boolean = false;


    loading: boolean = true;

    @ViewChild('filter') filter!: ElementRef;

     selectedApplicationDTO: JobApplicationDTO;

    constructor(private customerService: CustomerService,
                private jobApplicationService: JobApplicationService,
                private productService: ProductService
    ) { }

    ngOnInit() {
        this.jobApplicationService.getAllJobApplications().subscribe({
            next: (response) => {
                console.log(response);
                this.customers1 = response;
                this.customers1.forEach(customer => customer.applicationDate = new Date(customer.applicationDate));
                this.loading = false;

            },
            error: (error) => {
                console.error('There was an error!', error);
            }
        });


        this.productService.getProductsWithOrdersSmall().then(data => this.products = data);

        this.representatives = [
            { name: 'Amy Elsner', image: 'amyelsner.png' },
            { name: 'Anna Fali', image: 'annafali.png' },
            { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
            { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
            { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
            { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
            { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
            { name: 'Onyama Limba', image: 'onyamalimba.png' },
            { name: 'Stephen Shaw', image: 'stephenshaw.png' },
            { name: 'XuXue Feng', image: 'xuxuefeng.png' }
        ];

        this.statuses = [
            { label: 'Unqualified', value: 'unqualified' },
            { label: 'Sent', value: 'Sent' },
            { label: 'New', value: 'new' },
            { label: 'Negotiation', value: 'negotiation' },
            { label: 'test', value: 'test' },
            { label: 'Proposal', value: 'proposal' }
        ];
    }

    expandAll() {
        if (!this.isExpanded) {
            this.products.forEach(product => product && product.name ? this.expandedRows[product.name] = true : '');

        } else {
            this.expandedRows = {};
        }
        this.isExpanded = !this.isExpanded;
    }

    formatCurrency(value: number) {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

    clear(table: Table) {
        table.clear();
        this.filter.nativeElement.value = '';
    }

    toggleEditMode() {
        if (this.isEditMode) {
            // Revert changes when switching out of edit mode
            this.selectedMail = { ...this.mail };
        } else {
            // Store original data before editing
            this.mail = { ...this.selectedMail };
        }
        this.isEditMode = !this.isEditMode;
    }

    saveMail() {
        // Implement saving logic
        this.toggleEditMode();
    }

    discardChanges() {
        this.mail = { ...this.selectedMail };
        this.toggleEditMode();
    }


    toggleSidebar() {
        this.mailSidebar = !this.mailSidebar;
    }

    onSidebarHide() {
        if (this.isEditMode) {
            // If in edit mode, reset mailSidebar to true to keep it open
            setTimeout(() => this.mailSidebar = true);
        }

    }

    onSendMailClick(selectedApplicationDTO: JobApplicationDTO): void {
        this.jobApplicationService.sendMail(selectedApplicationDTO).subscribe({
            next: (response) => {
                console.log(response);
            },

            error: (error) => {
                console.error('There was an error! in sending mail', error);
            }
        })
    }


    openMailSidebar(customer) {
        this.selectedApplicationDTO = customer;
        this.selectedMail = {
            recipient: customer.mailContent.recipient,  // Assuming the customer object has an email field
            subject: customer.mailContent.subject,
            body: customer.mailContent.message,
            attachedFiles: customer.mailContent.attachedFiles,
        };
        this.mailSidebar = true;
    }

}
// job-application.dto.ts

export interface JobApplicationDTO {
    userId: number;
    jobId: number;
    compatibility: number;
    verified: boolean;
    applicationDate: Date;
    status: string;

    mailContent: MailContentDTO;
}

export interface MailContentDTO {
    recipient: string;
    subject: string;
    message: string;
    attachedFiles: string;
}
