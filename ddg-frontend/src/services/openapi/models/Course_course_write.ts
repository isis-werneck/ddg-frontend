/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Course_course_write = {
    type: Course_course_write.type;
    name: string;
    code: string;
    trainingCycle?: string | null;
    tutor?: string | null;
    grade?: Course_course_write.grade;
    courseNumber?: number;
};
export namespace Course_course_write {
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

