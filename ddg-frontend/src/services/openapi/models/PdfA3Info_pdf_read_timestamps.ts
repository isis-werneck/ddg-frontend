/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type PdfA3Info_pdf_read_timestamps = {
    disabilityMeasures?: boolean | null;
    disabilityMeasuresComments?: string | null;
    extraordinaryAuthorization?: boolean | null;
    extraordinaryAuthorizationComments?: string | null;
    multipleCompanies?: boolean | null;
    trainingInterval?: PdfA3Info_pdf_read_timestamps.trainingInterval;
    specificTrainingComments?: string | null;
    obsPerformance?: string | null;
    obsAssessment?: string | null;
    obsTutor?: string | null;
};
export namespace PdfA3Info_pdf_read_timestamps {
    export enum trainingInterval {
        DAILY = 'daily',
        WEEKLY = 'weekly',
        MONTHLY = 'monthly',
        OTHER = 'other',
    }
}

