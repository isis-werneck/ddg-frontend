/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PdfCompanyTutor_pdf_write } from './PdfCompanyTutor_pdf_write';
import type { PdfLearningOutcome_pdf_write } from './PdfLearningOutcome_pdf_write';
import type { PdfSignatory_pdf_write } from './PdfSignatory_pdf_write';
import type { PdfStudent_pdf_write } from './PdfStudent_pdf_write';
/**
 * Generate a PDF file and stores received data to the database.
 */
export type PdfDownload_pdf_write = {
    fileType: PdfDownload_pdf_write.fileType;
    company?: string | null;
    trainingCycle?: string | null;
    course?: string | null;
    trainingAction?: string | null;
    students?: Array<PdfStudent_pdf_write>;
    learningOutcomes?: Array<PdfLearningOutcome_pdf_write>;
    signatory?: (PdfSignatory_pdf_write | null);
    customData?: Record<string, any>;
    companyTutor?: (PdfCompanyTutor_pdf_write | null);
    teacher?: string | null;
    documentNumber?: string | null;
    includeRelated?: any[] | null;
    module?: string | null;
};
export namespace PdfDownload_pdf_write {
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

