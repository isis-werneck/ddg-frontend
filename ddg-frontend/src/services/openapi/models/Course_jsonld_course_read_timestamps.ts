/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Course_jsonld_course_read_timestamps = {
    readonly '@context'?: (string | Record<string, any>);
    readonly '@id'?: string;
    readonly '@type'?: string;
    readonly id?: number;
    type: Course_jsonld_course_read_timestamps.type;
    name: string;
    code: string;
    trainingCycle?: string | null;
    tutor?: string | null;
    grade?: Course_jsonld_course_read_timestamps.grade;
    courseNumber?: number;
};
export namespace Course_jsonld_course_read_timestamps {
    export enum type {
        FFE_FP = 'FFE FP',
        FCT_SEPE = 'FCT SEPE',
    }
    export enum grade {
        B_SICO = 'Básico',
        MEDIO = 'Medio',
        SUPERIOR = 'Superior',
    }
}

