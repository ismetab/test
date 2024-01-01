// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    apiUrl: 'http://localhost:8080',
    loginPage: '/',
    accessDenied: '/auth/access',
    userDashboard: "user",
    adminDashboard: "admin",
    keyForJwttoken: 'currentUser',
    loginApiUrl: '/login',
    personalInfoUpdate: '/updatePersonalInfo',
    healthInfoUpdate: '/updateHealthInfo',
    experienceUpdate: '/updateExperience',
    educationUpdate: '/updateEducation',
    professionalInfoUpdate: '/updateProfessionalInfo',
    personalInfoGet: '/getPersonalInfo',
    healthInfoGet: '/getHealthInfo',
    experienceGet: '/getExperience',
    educationGet: '/getEducation',
    getJobApplications: '/jobApplications',
    sendMail: '/sendMail',
    professionalInfoGet: '/getProfessionalInfo',
    registerPage: '/register',
    job: '/job',
    jobAdd: '/jobAdd',
    jobTransaction: '/jobTransaction',
    jobTransactionUpdate: '/jobTransactionUpdate',
    user: '/user'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
