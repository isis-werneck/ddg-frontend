/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PdfA3Info_pdf_write } from './PdfA3Info_pdf_write';
import type { PdfCompanyTutor_pdf_write } from './PdfCompanyTutor_pdf_write';
import type { PdfTrainingPeriod_pdf_write } from './PdfTrainingPeriod_pdf_write';
export type PdfStudent_pdf_write = {
    id?: string;
    periodFrom?: string | null;
    periodTo?: string | null;
    hoursAndDays?: string | null;
    totalHours?: number | null;
    weeklyHours?: number | null;
    startTime?: string | null;
    endTime?: string | null;
    a3Info?: (PdfA3Info_pdf_write | null);
    comments?: string | null;
    trainingPeriods?: Array<PdfTrainingPeriod_pdf_write>;
    dailyHours?: number | null;
    company?: string | null;
    companyTutor?: (PdfCompanyTutor_pdf_write | null);
};

