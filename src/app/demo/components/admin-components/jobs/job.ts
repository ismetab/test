import {User} from "../../auth/login/user.model";

export interface JobDTO {
    companyName: string;
    companyAddress: string;
    companyEmail: string;
    jobTitle: string;
    jobDescription: string;
    jobLocationCity: string;
    jobType: string;
}

export interface JobTransactionDTO {
    id?: string;
    job?: JobDTO;
    user?: User;
    jobStatus?: string;
}
