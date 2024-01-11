import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { CountryService } from 'src/app/demo/service/country.service';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import {PersonalInfoService} from "./services/personal-info.service";
import {AuthenticationService} from "../../auth/authentication/authentication.service";
import {ProfessionalInfoService} from "./services/professional-info.service";
import {HealthService} from "./services/health.service";
import {ExperienceService} from "./services/experience.service";
import {EducationService} from "./services/education.service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";
import {DocumentService} from "./services/document.service";

@Component({
    templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
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
    uploadedFiles: any[] = [];


    constructor(private countryService: CountryService,
                private fb: FormBuilder,
                private personalInfoService: PersonalInfoService,
                private healthService: HealthService,
                private experienceService : ExperienceService,
                private educationService : EducationService,
                private professionalInfoService: ProfessionalInfoService,
                private authService: AuthenticationService,
                private http: HttpClient,
                private documentService: DocumentService) { }

    ngOnInit() {

        this.personalInfoForm = this.fb.group({
            name: ['', Validators.required],
            middleName: [''],
            surname: ['', Validators.required],
            mobilePhone: ['', Validators.required],
            address: ['', Validators.required],
            birthday: ['', Validators.required],
            nationalities: [[], Validators.required],
            hasDriversLicense: [false],
            driversLicenseCategory: ['']
        });
        this.personalInfoForm.disable();


        this.professionalInfoForm = this.fb.group({
            professionalKnowledge: ['', Validators.required],
            maximumTravelTime: ['', Validators.required],
            noticePeriodDays: ['', Validators.required],
            expectedSalary: ['', Validators.required],
            jobLocations: ['', Validators.required],
            jobTypes: ['', Validators.required],
            driversLicenseCategory: ['', Validators.required],
            ga: [''],
        });
        this.professionalInfoForm.disable();

        this.experienceForm = this.fb.group({
            startDate: ['', Validators.required],
            endDate: ['', Validators.required],
            position: ['', Validators.required],
            company: ['', Validators.required],
            description: ['', Validators.required],
        });

        this.loadUserProfile();
        this.loadUserProfession();
        this.loadUserHealth();
        this.loadUserExperience();
        this.loadUserEducation();
        this.loadUserDocuments();

        this.countryService.getCountries().then(countries => {
            this.countries = countries;
        });


        this.countryService.getCities().then(cities => {
            this.cities = cities;
        });

        this.paymentOptions = [
            "Full-time", "Part-time"
        ];

        this.experienceForm = this.fb.group({
            experiences: this.fb.array([])
        });

        this.educationForm = this.fb.group({
            educationDetails: this.fb.array([])
        });


    }

    private loadUserProfile() {
        const userId = this.authService.getId(); // Get user ID
        this.personalInfoService.get(userId).subscribe({
            next: (profileData) => {
                // Transform the nationalities if needed
                const transformedNationalities = profileData.nationalities.map(nat => {
                    const [name, code] = nat.split(', ');
                    return { name, code }; // Convert to the format for p-multiSelect
                });

                // Update the form
                this.personalInfoForm.patchValue({
                    name: profileData.name,
                    middleName: profileData.middleName,
                    surname: profileData.surname,
                    mobilePhone: profileData.mobilePhone,
                    address: profileData.address,
                    birthday: new Date(profileData.birthday),
                    nationalities: transformedNationalities
                });
            },
            error: (error) => {
                console.error('Error fetching user profile', error);
            }
        });
    }


    filterCountry(event: any) {
        const filtered: any[] = [];
        const query = event.query;
        for (let i = 0; i < this.countries.length; i++) {
            const country = this.countries[i];
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
            }
        }

        this.filteredCountries = filtered;
    }

    get experienceForms() {
        return this.experienceForm.get('experiences') as FormArray;
    }

    myUploadHandler(event) {
        const formData = new FormData();
        event.files.forEach((file) => {
            formData.append('files', file, file.name);
        });

        formData.append('userId', this.authService.getId().toString());

        let url = environment.apiUrl + '/upload';
        this.http.post(url, formData, { responseType: 'text' }).subscribe(
            response => {
                console.log(response);
                alert("File saved successfully");
                this.loadUserDocuments();
            },
            error => {
                console.error('Error uploading file:', error);
                alert("Failed to upload file");
            }
        );
    }


    myUploadHandlerDraft(event) {
        const userId = this.authService.getId();
        this.documentService.uploadDocuments(event.files, userId).subscribe({
            next: (response) => {
                alert('Experience  saved successfully');
                this.editEducationForm();
            },
            error: (error) => {
                console.error('Error saving Experience', error);
            }
        });
    }



    addExperience() {
        const experience = this.fb.group({
            startDate: ['', Validators.required],
            endDate: ['', Validators.required],
            companyName: ['', Validators.required],
            position: ['', Validators.required],
            description: ['']
        });

        this.experienceForms.push(experience);
    }

    deleteExperience(i: number) {
        this.experienceForms.removeAt(i);
    }

    get educationForms() {
        return this.educationForm.get('educationDetails') as FormArray;
    }

    addEducation() {
        const education = this.fb.group({
            institutionName: ['', Validators.required],
            degree: ['', Validators.required],
            startDate: ['', Validators.required],
            endDate: ['', Validators.required],
            description: ['']
        });

        this.educationForms.push(education);
    }

    deleteEducation(i: number) {
        this.educationForms.removeAt(i);
    }

    onCurrentHealthChange() {
        this.disableCurrentHealthDetails = this.currentlyHealthy !== 'Yes';
    }

    onWorkRelatedIllnessChange() {
        this.disableIllnessDetails = this.sufferingWorkRelatedIllness !== 'Yes';
    }

    onPersonalSubmit() {
        if (true) {
            console.log(this.personalInfoForm.value);
            const formData = this.personalInfoForm.value;

            const combinedNationalities = formData.nationalities.map(nationality => `${nationality.name}, ${nationality.code}`);
            formData.nationalities = combinedNationalities;

            console.log(formData);

            this.personalInfoService.save(this.personalInfoForm.value, this.authService.getId())
                .subscribe({
                    next: response => {
                        alert('Personal Info saved successfullyy');
                        this.editProfileForm();
                        // Additional success logic here
                    },
                    error: error => {
                        console.error('Error saving personal info', error);
                        // Additional error handling here
                    },
                    complete: () => {
                        // Logic for when the observable completes
                    }
                });
        } else {
            console.error('Form Validation Error');
        }
    }

    onProfessionalSubmit() {
        if (true) {
            console.log(this.professionalInfoForm.value);

            this.professionalInfoService.save(this.professionalInfoForm.value, this.authService.getId())
                .subscribe({
                    next: response => {
                        alert('Personal Info saved successfully');
                        this.editProfessionalForm();
                    },
                    error: error => {
                        console.error('Error saving personal info', error);
                    },
                    complete: () => {
                    }
                });
        } else {
            console.error('Form Validation Error');
        }
    }

    saveHealthInfo() {
        const healthInfoDTO = new HealthInfo(
            this.sufferingWorkRelatedIllness,
            this.currentlyHealthy,
            this.workRelatedIllnessDetails,
            this.currentHealthDetails);


        this.healthService.save(healthInfoDTO, this.authService.getId()).subscribe({
            next: (response) => {
                alert('Health info saved successfully');
                this.editHealthForm();
                // Handle success
            },
            error: (error) => {
                console.error('Error saving health info', error);
                // Handle error
            }
        });
    }


    private loadUserProfession() {
        const userId = this.authService.getId(); // Get user ID
        this.professionalInfoService.get(userId).subscribe({
            next: (professionalData) => {
                this.professionalInfoForm.patchValue({
                    expectedSalary: professionalData.expectedSalary,
                    driversLicenseCategory: professionalData.driversLicenseCategory,
                    professionalKnowledge: professionalData.professionalKnowledge,
                    jobLocations: professionalData.jobLocations,
                    maximumTravelTime: professionalData.maximumTravelTime,
                    noticePeriodDays: professionalData.noticePeriodDays,
                    jobTypes: professionalData.jobTypes,
                    ga: professionalData.ga
                });
            },
            error: (error) => {
                console.error('Error fetching user profile', error);
                // Handle errors here
            }
        });
    }

    private loadUserHealth() {
        const userId = this.authService.getId(); // Get user ID
        this.healthService.get(userId).subscribe({
            next: (healthInfo) => {
                this.workRelatedIllnessDetails = healthInfo.workRelatedIllnessDetails;
                this.currentHealthDetails = healthInfo.currentHealthDetails;

                if (healthInfo.currentlyHealthy) {
                    this.currentlyHealthy = "Yes";
                } else {
                    this.currentlyHealthy = "No";
                }

                if (healthInfo.sufferingWorkRelatedIllness) {
                    this.sufferingWorkRelatedIllness = "Yes";
                } else {
                    this.sufferingWorkRelatedIllness = "No";
                }
            },
            error: (error) => {
                console.error('Error fetching user profile', error);
                // Handle errors here
            }
        });
    }

    private loadUserExperience() {
        const userId = this.authService.getId(); // Get user ID
        this.experienceService.get(userId).subscribe({
            next: (experience) => {
                this.populateExperienceForm(experience);
            },
            error: (error) => {
                console.error('Error fetching user profile', error);
                // Handle errors here
            }
        });
    }

    private loadUserEducation() {
        const userId = this.authService.getId(); // Get user ID
        this.educationService.get(userId).subscribe({
            next: (education) => {
                this.populateEducateForm(education);
            },
            error: (error) => {
                console.error('Error fetching user profile', error);
                // Handle errors here
            }
        });
    }

    onExperienceSave() {
        const experiencesArray = this.experienceForm.get('experiences') as FormArray;
        var experienceDTOS = experiencesArray.controls.map(control => {
            return new ExperienceDTO(
                control.value.startDate,
                control.value.endDate,
                control.value.companyName,
                control.value.position,
                control.value.description
            );
        });

        this.experienceService.save(experienceDTOS, this.authService.getId()).subscribe({
            next: (response) => {
                alert('Experience  saved successfully');
                this.editExperienceForm();
                // Handle success
            },
            error: (error) => {
                console.error('Error saving Experience', error);
                // Handle error
            }
        });
    }


    private populateExperienceForm(experiences: ExperienceDTO[]) {
        const experienceArray = this.experienceForm.get('experiences') as FormArray;
        experiences.forEach(exp => {
            experienceArray.push(this.fb.group({
                startDate: [new Date(exp.startDate)],
                endDate: [new Date(exp.endDate)],
                companyName: [exp.companyName],
                position: [exp.position],
                description: [exp.description]
            }));
        });
    }

    private populateEducateForm(experiences: EducationDTO[]) {
        const educations = this.educationForm.get('educationDetails') as FormArray;
        experiences.forEach(exp => {
            educations.push(this.fb.group({
                startDate: [new Date(exp.startDate)],
                endDate: [new Date(exp.endDate)],
                institutionName: [exp.institutionName],
                degree: [exp.degree],
                description: [exp.description]
            }));
        });
    }

    onEducationSave() {
        const educations = this.educationForm.get('educationDetails') as FormArray;

        var educationDTOS = educations.controls.map(control => {
            return new EducationDTO(
                control.value.startDate,
                control.value.endDate,
                control.value.degree,
                control.value.institutionName,
                control.value.description
            );
        });

        console.log(educationDTOS);

        this.educationService.save(educationDTOS, this.authService.getId()).subscribe({
            next: (response) => {
                alert('Experience  saved successfully');
                this.editEducationForm();
                // Handle success
            },
            error: (error) => {
                console.error('Error saving Experience', error);
                // Handle error
            }
        });
    }

    downloadFile() {
        this.documentService.getFiles(this.authService.getId()).subscribe(blob => {
            const url = window.URL.createObjectURL(blob);
            const anchor = document.createElement('a');
            anchor.href = url;
            anchor.download = 'downloadedfile'; // You might want to set an actual file name
            anchor.click();
            window.URL.revokeObjectURL(url);
        });
    }

    editProfileForm() {
        if (this.isPersonalFromEditable) {
            this.personalInfoForm.disable();
            this.isPersonalFromEditable = false;
        } else {
            this.personalInfoForm.enable();
            this.isPersonalFromEditable = true;
        }
    }

    editProfessionalForm() {
        if (this.isProfessionalFromEditable) {
            this.professionalInfoForm.disable();
            this.isProfessionalFromEditable = false;
        } else {
            this.professionalInfoForm.enable();
            this.isProfessionalFromEditable = true;

        }
    }

    editHealthForm() {
        if (this.isHealthFromEditable) {
            this.isHealthFromEditable = false;
        } else {
            this.isHealthFromEditable = true;
        }
    }

    editExperienceForm() {
        if (this.isExperienceFromEditable) {
            this.experienceForm.disable();
            this.isExperienceFromEditable = false;
        } else {
            this.experienceForm.enable();
            this.isExperienceFromEditable = true;

        }
    }

    editEducationForm() {
        if (this.isEducationFromEditable) {
            this.educationForm.disable();
            this.isEducationFromEditable = false;
        } else {
            this.educationForm.enable();
            this.isEducationFromEditable = true;

        }
    }

    private loadUserDocuments() {
        this.documentService.getDocumentsByUserId(this.authService.getId()).subscribe(docs => {
            this.documents = docs;
        }, error => {
            console.error('Error loading documents:', error);
        });
    }

    deleteDocument(id) {
        this.documentService.deleteDocument(id, this.authService.getId()).subscribe(() => {
            // Handle successful deletion
            // For example, remove the document from the documents array
            this.documents = this.documents.filter(doc => doc.id !== id);
            alert("Removed successfully.")
        }, error => {
            console.error('Error deleting document:', error);
        });
    }
}

export class PersonalInfo {
    name: string;
    middleName: string;
    surname: string;
    mobilePhone: string;
    address: string;
    birthday: Date;
    nationalities: string[];
}

export class ProfessionalInfo {
    professionalKnowledge: string;
    maximumTravelTime: string;
    noticePeriodDays: string;
    expectedSalary: string;
    jobLocations: string[];
    jobTypes: string[];
    driversLicenseCategory: string[];
    ga: string;
}

export class HealthInfo {
    sufferingWorkRelatedIllness: boolean;
    currentlyHealthy: boolean;
    workRelatedIllnessDetails: string;
    currentHealthDetails: string;

    constructor(workRelatedIllness: string, currentlyHealthy: string, workRelatedIllnessDetails: string, currentHealthDetails: string) {
        this.sufferingWorkRelatedIllness = workRelatedIllness === 'Yes';
        this.currentlyHealthy = currentlyHealthy === 'Yes';
        this.workRelatedIllnessDetails = workRelatedIllnessDetails;
        this.currentHealthDetails = currentHealthDetails;

        if (!this.currentlyHealthy) {
            this.currentHealthDetails = '';
        }

        if (!this.sufferingWorkRelatedIllness) {
            this.workRelatedIllnessDetails = '';
        }
    }
}

export class ExperienceDTO {
    constructor(
        public startDate: string,
        public endDate: string,
        public companyName: string,
        public position: string,
        public description: string
    ) {}
}

export class EducationDTO {
    constructor(
        public startDate: string,
        public endDate: string,
        public degree: string,
        public institutionName: string,
        public description: string
    ) {}
}
