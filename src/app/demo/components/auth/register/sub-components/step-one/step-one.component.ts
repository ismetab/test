import {Component, OnInit} from '@angular/core';
import {ResumeService} from "../../service/resume.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ChildComponentBase} from "../../register.component";
import {CountryService} from "../../../../../service/country.service";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
    selector: 'app-step-one',
    templateUrl: './step-one.component.html',
    styles: [`
    `]
})

export class StepOneComponent implements OnInit, ChildComponentBase{
    // You can add any properties or methods you need here
    // For example:
    data: RegisterDTO = new RegisterDTO();

    fullName: string = '';
    requireResume: boolean = true;
    isNameEntryRequired: boolean;
    isResumeUploadSelected: boolean;
    selectedFile: File | null = null;
    countries: any[] = [];
    selectedCountries: any[] = [];
    selectedImg: File = null;

    personalInfo: PersonalInfoDTO = {
        middleName: "", nationalities: [], surname: "",
        name: '',
        mobilePhone: '',
        birthday: null, // Initialize with an appropriate default value
        address: ''
    };
    password: string;
    email: string;
    imageUrl: string | ArrayBuffer = '';

    constructor(private resumeService: ResumeService,
                private activatedRoute: ActivatedRoute,
                private router: Router,
                private countryService: CountryService,
                private spinner: NgxSpinnerService) {
    }


    ngOnInit() {

        this.countryService.getCountries().then(countries => {
            this.countries = countries;
        });

        const registerDTO = history.state.registerDTO;
        if (registerDTO) {
            console.log('Received RegisterDTO:', registerDTO);
            this.data = registerDTO;
            this.requireResume = false;
            this.loadData();
        } else {
            if (history.state.requireResume != undefined) {
                this.requireResume = history.state.requireResume;
            }
            console.log('No resumeDTO received');
        }
    }



    onImgSelected(event: Event): void {
        const input = event.target as HTMLInputElement;
        if (input.files && input.files[0]) {
            const file = input.files[0];
            const reader = new FileReader();

            reader.onload = (e: ProgressEvent<FileReader>) => {
                const base64Data = e.target.result as string;

                this.data.resumePhotoDTO.data = base64Data.split(',')[1];
                this.data.resumePhotoDTO.photoName = file.name;
                this.data.resumePhotoDTO.photoType = file.type.split('/')[1];

                this.imageUrl = base64Data;
            };

            reader.readAsDataURL(file);
        }
    }

    onManualEntry() {
        const navigationExtras = {
            state: { requireResume: false }
        };

        this.router.navigate(["/register/personal"], navigationExtras);
    }

    uploadResume(resume: File, fullNameValue: string) {
        this.spinner.show();
        const formData = new FormData();
        formData.append('fullName', fullNameValue);
        formData.append('resume', resume);

        this.resumeService.uploadResume(formData).subscribe({
            next: (resumeDTO) => {
                console.log('Resume uploaded successfully:', resumeDTO);
                if (!resumeDTO) {
                    this.spinner.hide();
                    return;
                }

                const registerDTO = this.prepareRegisterDTO(resumeDTO, fullNameValue);
                this.spinner.hide();
                this.router.navigate(['/register/personal'], { state: { registerDTO } });
            },
            error: (error) => {
                console.error('Error uploading resume:', error);
                this.spinner.hide();
            }
        });
    }

    private prepareRegisterDTO(resumeDTO: ResumeDTO, fullName: string): RegisterDTO {
        // Directly create and return the RegisterDTO object
        return {
            user: new User(fullName, "", "", ""),
            personalInfo: new PersonalInfoDTO(fullName, "", "", "", "", new Date(resumeDTO.personalInfo?.birthday), []),
            educationList: resumeDTO.educationList.map(e => new EducationDTO(new Date(e.startDate), new Date(e.endDate), e.degree, e.institutionName, e.description)),
            experienceList: resumeDTO.experienceList.map(e => new ExperienceDTO(new Date(e.startDate), new Date(e.endDate), e.position, e.companyName, e.description)),
            healthInfo: new HealthInfoDTO(false, "", false, ""),
            professionalInfo: new ProfessionalInfoDTO(resumeDTO.resumeSummary, "", "", "", [], [], [], false),
            resumePhotoDTO: resumeDTO.resumePhotoDTO,
            documents: [] // Assuming documents should include the uploaded resume
        };
    }

    onNameSubmitted(fullNameValue: string) {
        if (!this.selectedFile) {
            console.error('No file selected');
            return;
        }

        this.uploadResume(this.selectedFile, fullNameValue);
    }

onFileSelected(event: any): void {
        // The files are in event.files for PrimeNG FileUpload
        if (event.files && event.files.length > 0) {
            this.selectedFile = event.files[0]; // Assuming single file selection
        }
    }

    retrieveSelectedFile(): File | null {
        return this.selectedFile;
    }


    showResumeUpload() {
        this.isResumeUploadSelected = true;
        this.isNameEntryRequired = true;
    }

    private loadData() {

        this.imageUrl = `data:image/${this.data.resumePhotoDTO.photoType};base64,${this.data.resumePhotoDTO.data}`;


        this.personalInfo = this.data.personalInfo
        if (this.data.user != undefined) {
            this.password = this.data.user.password;
            this.email = this.data.user.username;
        }
        if (this.personalInfo != undefined && this.personalInfo.nationalities != undefined)
        this.selectedCountries = this.personalInfo.nationalities.map(nationalityString => {
            const [name, code] = nationalityString.split(', ');
            return { name, code };
        });
    }

    getData() {
        this.data.personalInfo = this.personalInfo;
        this.data.user = new User(this.personalInfo.name, this.password, this.email, this.personalInfo.mobilePhone);
        this.personalInfo.nationalities = this.selectedCountries.map(nationality => `${nationality.name}, ${nationality.code}`);
        return this.data;
    }

    private setDefaultImage() {
        this.imageUrl = "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg";
    }
}

export interface ResumeDTO {
    resumeSummary: string;
    personalInfo: PersonalInfoDTO;
    educationList: EducationDTO[];
    experienceList: ExperienceDTO[];
    resumePhotoDTO: ResumePhotoDTO;
}

class User {
    constructor(name: string, password: string, email: string, mobilePhone: string) {
        this.fullname = name;
        this.password = password;
        this.username = email;
        this.mobilePhone = mobilePhone;
    }

    username: string = "";
    password: string = "";
    fullname: string = "";
    mobilePhone: string = "";
}

export class RegisterDTO {
    user: User;
    personalInfo: PersonalInfoDTO;
    professionalInfo: ProfessionalInfoDTO;
    healthInfo: HealthInfoDTO;
    educationList: EducationDTO[];
    experienceList: ExperienceDTO[];
    resumePhotoDTO: ResumePhotoDTO;
    documents: File[];

    constructor() {
        // Assuming empty strings, default booleans, empty arrays, etc. for simplicity
        this.user = new User("", "", "", "");
        this.personalInfo = new PersonalInfoDTO("", "", "", "", "", new Date(), []);
        this.professionalInfo = new ProfessionalInfoDTO("", "", "", "", [], [], [], false);
        this.healthInfo = new HealthInfoDTO(undefined, "", undefined, "");
        this.educationList = []; // Assuming no educations initially
        this.experienceList = []; // Assuming no experiences initially
        this.resumePhotoDTO = new ResumePhotoDTO("", "", "");
        this.documents = []; // Assuming no documents initially
    }
}

export class HealthInfoDTO {
    sufferingWorkRelatedIllness: boolean;
    workRelatedIllnessDetails: string;
    currentlyHealthy: boolean;
    currentHealthDetails: string;

    constructor(
        sufferingWorkRelatedIllness: boolean,
        workRelatedIllnessDetails: string,
        currentlyHealthy: boolean,
        currentHealthDetails: string
    ) {
        this.sufferingWorkRelatedIllness = sufferingWorkRelatedIllness;
        this.workRelatedIllnessDetails = workRelatedIllnessDetails;
        this.currentlyHealthy = currentlyHealthy;
        this.currentHealthDetails = currentHealthDetails;
    }
}

export class PersonalInfoDTO {
    name: string;
    middleName: string;
    surname: string;
    mobilePhone: string;
    address: string;
    birthday: Date;
    nationalities: string[];

    constructor(
        name: string,
        middleName: string,
        surname: string,
        mobilePhone: string,
        address: string,
        birthday: Date,
        nationalities: string[]
    ) {
        this.name = name;
        this.middleName = middleName;
        this.surname = surname;
        this.mobilePhone = mobilePhone;
        this.address = address;
        this.birthday = birthday;
        this.nationalities = nationalities;
    }
}

export class EducationDTO {
    startDate: Date;
    endDate: Date;
    degree: string;
    institutionName: string;
    description: string;

    constructor(
        startDate: Date,
        endDate: Date,
        degree: string,
        institutionName: string,
        description: string
    ) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.degree = degree;
        this.institutionName = institutionName;
        this.description = description;
    }
}

export class ExperienceDTO {
    startDate: Date;
    endDate: Date;
    position: string;
    companyName: string;
    description: string;

    constructor(
        startDate: Date,
        endDate: Date,
        position: string,
        companyName: string,
        description: string
    ) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.position = position;
        this.companyName = companyName;
        this.description = description;
    }
}

export class ResumePhotoDTO {
    data: string;
    photoName: string;
    photoType: string;

    constructor(
        data: string,
        photoName: string,
        photoType: string
    ) {
        this.data = data;
        this.photoName = photoName;
        this.photoType = photoType;
    }
}

export class ProfessionalInfoDTO {
    professionalKnowledge: string;
    maximumTravelTime: string;
    noticePeriodDays: string;
    expectedSalary: string;
    ga: boolean;
    jobLocations: string[];
    jobTypes: string[];
    driversLicenseCategory: string[];

    constructor(
        professionalKnowledge: string,
        maximumTravelTime: string,
        noticePeriodDays: string,
        expectedSalary: string,
        jobLocations: string[],
        jobTypes: string[],
        driversLicenseCategory: string[],
        ga: boolean
    ) {
        this.professionalKnowledge = professionalKnowledge;
        this.maximumTravelTime = maximumTravelTime;
        this.noticePeriodDays = noticePeriodDays;
        this.expectedSalary = expectedSalary;
        this.jobLocations = jobLocations;
        this.jobTypes = jobTypes;
        this.driversLicenseCategory = driversLicenseCategory;
        this.ga = ga;
    }
}
