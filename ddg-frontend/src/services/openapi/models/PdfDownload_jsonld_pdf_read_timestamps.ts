/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PdfCompanyTutor_jsonld_pdf_read_timestamps } from './PdfCompanyTutor_jsonld_pdf_read_timestamps';
import type { PdfLearningOutcome_jsonld_pdf_read_timestamps } from './PdfLearningOutcome_jsonld_pdf_read_timestamps';
import type { PdfSignatory_jsonld_pdf_read_timestamps } from './PdfSignatory_jsonld_pdf_read_timestamps';
import type { PdfStudent_jsonld_pdf_read_timestamps } from './PdfStudent_jsonld_pdf_read_timestamps';
export type PdfDownload_jsonld_pdf_read_timestamps = {
    readonly '@context'?: (string | Record<string, any>);
    readonly '@id'?: string;
    readonly '@type'?: string;
    readonly id?: number;
    fileType: PdfDownload_jsonld_pdf_read_timestamps.fileType;
    company?: string | null;
    trainingCycle?: string | null;
    course?: string | null;
    trainingAction?: string | null;
    students?: Array<PdfStudent_jsonld_pdf_read_timestamps>;
    learningOutcomes?: Array<PdfLearningOutcome_jsonld_pdf_read_timestamps>;
    signatory?: (PdfSignatory_jsonld_pdf_read_timestamps | null);
    customData?: Record<string, any>;
    companyTutor?: (PdfCompanyTutor_jsonld_pdf_read_timestamps | null);
    teacher?: string | null;
    user?: string;
    documentNumber?: string | null;
    includeRelated?: any[] | null;
    module?: string | null;
    createdAt?: string;
    updatedAt?: string;
    readonly type?: string;
    readonly professionalFamily?: string | null;
};
export namespace PdfDownload_jsonld_pdf_read_timestamps {
    export enum fileType {
        FFE_ANEXO1 = 'ffe_anexo1',
        FFE_ANEXO2_1 = 'ffe_anexo2_1',
        FFE_ANEXO2_2 = 'ffe_anexo2_2',
        FFE_ANEXO3_PLAN = 'ffe_anexo3_plan',
        FFE_ANEXO_BECA_INTENSIVO = 'ffe_anexo_beca_intensivo',
        FFE_ANEXO_SEGUIMIENTO = 'ffe_anexo_seguimiento',
        FFE_ANEXO_VALORACION_FINAL = 'ffe_anexo_valoracion_final',
        FFE_EVALUACION_PRL_ANEXO1 = 'ffe_evaluacion_prl_anexo1',
        FFE_EVALUACION_PRL_ANEXO2 = 'ffe_evaluacion_prl_anexo2',
        FFE_EUROPASS = 'ffe_europass',
        FCT_ANEXO1 = 'fct_anexo1',
        FCT_ANEXO2 = 'fct_anexo2',
        FCT_CP1 = 'fct_cp1',
        FCT_CP3 = 'fct_cp3',
        FCT_CP8 = 'fct_cp8',
    }
}

