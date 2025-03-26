/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PdfA3Info_jsonld_pdf_read_timestamps } from './PdfA3Info_jsonld_pdf_read_timestamps';
import type { PdfCompanyTutor_jsonld_pdf_read_timestamps } from './PdfCompanyTutor_jsonld_pdf_read_timestamps';
import type { PdfTrainingPeriod_jsonld_pdf_read_timestamps } from './PdfTrainingPeriod_jsonld_pdf_read_timestamps';
export type PdfStudent_jsonld_pdf_read_timestamps = {
    readonly '@context'?: (string | Record<string, any>);
    readonly '@id'?: string;
    readonly '@type'?: string;
    id?: string;
    periodFrom?: string | null;
    periodTo?: string | null;
    hoursAndDays?: string | null;
    totalHours?: number | null;
    weeklyHours?: number | null;
    startTime?: string | null;
    endTime?: string | null;
    a3Info?: (PdfA3Info_jsonld_pdf_read_timestamps | null);
    comments?: string | null;
    trainingPeriods?: Array<PdfTrainingPeriod_jsonld_pdf_read_timestamps>;
    dailyHours?: number | null;
    company?: string | null;
    companyTutor?: (PdfCompanyTutor_jsonld_pdf_read_timestamps | null);
};

