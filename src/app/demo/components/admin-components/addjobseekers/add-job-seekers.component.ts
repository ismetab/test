import {Component, OnInit} from "@angular/core";
import {User} from "../../auth/login/user.model";
import {AuthenticationService} from "../../auth/authentication/authentication.service";
import {AddJobSeekerService} from "./addjobseekers.service";
import {CountryService} from "../../../service/country.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserPersonalInfoService} from "../../user-components/profile/services/user/user-personal-info.service";
import {UserHealthService} from "../../user-components/profile/services/user/user-health.service";
import {UserExperienceService} from "../../user-components/profile/services/user/user-experience.service";
import {UserEducationService} from "../../user-components/profile/services/user/user-education.service";
import {UserProfessionalInfoService} from "../../user-components/profile/services/user/user-professional-info.service";
import {HttpClient} from "@angular/common/http";
import {UserDocumentService} from "../../user-components/profile/services/user/user-document.service";
import {MenuItem, SelectItem} from "primeng/api";
import {Router} from "@angular/router";

@Component({
    templateUrl: './add-job-seekers.component.html',
    selector: 'app-appliedJobs'
})
export class AddJobSeekersComponent implements OnInit {

    jobSeekers: User[];
    selectedUserName: string = "";
    selectedFullName: string = "";
    selectedMobilPhone: string = "";
    isFirstCall: boolean = true;
    driverLicenseCategories = ["None","A1", "A2", "A", "B", "B1", "BE", "C1", "C1E", "C", "CE", "D1", "D1E", "D", "DE", "F", "G", "M"];
    countries: any[] = [];
    filteredCountries: any[] = [];
    workRelatedIllnessDetails: string = '';
    sufferingWorkRelatedIllness: string;
    currentlyHealthy: string;
    disableIllnessDetails: boolean = true;
    currentHealthDetails: string;
    disableCurrentHealthDetails: boolean = true;
    cities: SelectItem[] = [];
    selectedMulti: any[] = [];
    paymentOptions: any[] = [];
    experienceForm: FormGroup;
    educationForm: FormGroup;
    personalInfoForm: FormGroup;
    professionalInfoForm: FormGroup;
    isPersonalFromEditable = false;
    isProfessionalFromEditable = false;
    isHealthFromEditable = false;
    isExperienceFromEditable= false;
    isEducationFromEditable= false;
    documents: any[];
    profileSidebar: boolean = true;


    constructor(private router: Router) {
    }
    routeItems: MenuItem[] | undefined;
    currentStep: number = 1;
    totalSteps: number = 5;

    ngOnInit() {
        this.router.navigate(['/register']);
    }


}
