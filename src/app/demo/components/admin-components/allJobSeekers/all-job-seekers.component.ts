import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import { Table } from 'primeng/table';
import {PersonalInfoDTO} from "../../auth/register/sub-components/step-one/step-one.component";
import {UserPersonalInfoService} from "../../user-components/profile/services/user/user-personal-info.service";
import {ConfirmationService, MessageService} from "primeng/api";
import {PersonalInfo} from "../../user-components/profile/profile.component";
import {firstValueFrom} from "rxjs";

@Component({
    templateUrl: './all-job-seekers.component.html',
    providers: [MessageService, ConfirmationService]
})
export class AllJobSeekersComponent implements OnInit {

    personalInfoList: PersonalInfo[] = [];
    loading: boolean = true;
    totalRecords: number = 100;
    dataCache: Set<number> = new Set();
    currentPageNumber: number = 1;
    displayDialog: boolean = false;
    selectedUserId: any; // Adjust based on the actual data type

    @ViewChild('dt') table!: Table;

    constructor(private personalInfoService: UserPersonalInfoService,
                private cd: ChangeDetectorRef) { }

    ngOnInit() {
        if (this.populatePersonalInfoList()) {
            this.loadPersonalInfo();
        } else {
            alert("Error occurred while getting the Job seekers!");
        }
        this.loading = false;

    }

    loadPersonalInfo(page: number = 0, size: number = 10) {
        if (this.dataCache.has(page)) {
            this.loading = false;
        } else {
            this.loading = true;
            this.personalInfoService.getPersonalInfo({ page: page, size: size }).subscribe({
                next: (data) => {
                    console.log(data.content);
                    // Cache the new data
                    this.dataCache.add(page);
                    // Update the list to display data for the current page
                    var i = 0;
                    data.content.forEach(dto => {
                        this.personalInfoList[page * size + i] = dto;
                        i++;
                    });
                    this.loading = false;
                },
                error: (error) => {
                    console.error('There was an error!', error);
                    this.loading = false;
                }
            });
        }
    }


    onPage(event: any) {
        const page = event.first / event.rows;
        this.currentPageNumber = page + 1;
        this.loadPersonalInfo(page, event.rows);
    }


    clear(table: Table) {
        table.clear();
    }

    getAvatarUrl(personalInfo: PersonalInfoDTO) {
        // Implement logic to return the avatar URL based on personalInfo
        // Example: return 'path/to/avatar/' + personalInfo.id + '.jpg';
    }

    viewDetails(personalInfo: any) {
        console.log(personalInfo);
        this.selectedUserId = personalInfo.userId;
        this.displayDialog = true;
    }

    async populatePersonalInfoList() {
        try {
            const count = await firstValueFrom(this.personalInfoService.getNumberOfEntries());
            this.personalInfoList = Array.from({ length: count }, () => new PersonalInfo());
            return true;
        } catch (error) {
            return false;
        }
    }

    async populateFilteredPersonalInfoList(value : string) {
        try {
            const count = await firstValueFrom(this.personalInfoService.getNumberOfEntriesWithFilter(value));
            this.personalInfoList = Array.from({ length: count }, () => new PersonalInfo());
            return true;
        } catch (error) {
            return false;
        }
    }

    onGlobalFilter(value: string) {
        console.log(value);
        this.populateFilteredPersonalInfoList(value);
    }
}


