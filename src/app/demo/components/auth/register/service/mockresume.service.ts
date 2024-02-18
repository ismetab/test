import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {ResumeDTO} from "../sub-components/step-one/step-one.component";

@Injectable({
    providedIn: 'root'
})
export class MockResumeService {

    constructor() {}

    uploadResume(formData: FormData): Observable<ResumeDTO> {
        // Mock ResumeDTO object
        const mockResumeDTO: ResumeDTO = {
            resumeSummary: 'This is a mock summary.',
            personalInfo: {
                name: 'John',
                middleName: 'Doe',
                surname: 'Smith',
                mobilePhone: '123-456-7890',
                address: '123 Mock St',
                birthday: null, // Assuming Date as string in ISO format
                nationalities: ['MockNationality'],
            },
            educationList: [{
                startDate: new Date('2010-09-01'),
                endDate: new Date('2014-06-01'),
                degree: 'Bachelor of Science in Mockology',
                institutionName: 'University of Mock',
                description: 'A very intense study of mock subjects.'
            }],
            experienceList: [{
                startDate: new Date('2015-07-01'),
                endDate: new Date('2015-87-01'),
                position: 'Senior Mock Specialist',
                companyName: 'Mocking Corporation',
                description: 'Performed mocking at an advanced level.'
            }],
            resumePhotoDTO: {
                data: '', // You might want to mock base64 encoded data here
                photoName: 'mockPhoto.jpg',
                photoType: 'image/jpeg'
            }
        };

        // Return the mock object wrapped in an Observable
        return of(mockResumeDTO);
    }
}
