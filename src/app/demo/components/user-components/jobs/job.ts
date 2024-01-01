import {User} from "../../auth/login/user.model";

export interface JobDTO {
    jobId:number;
    companyName: string;
    companyAddress: string;
    companyEmail: string;
    jobTitle: string;
    jobDescription: string;
    jobLocationCity: string;
    jobType: string;
}

export interface JobTransactionDTO {
    transactionId?: number;
    job?: JobDTO;
    user?: User;
    jobStatus?: string;
}
