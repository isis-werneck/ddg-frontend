/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Teacher_teacher_read_timestamps = {
    readonly id?: number;
    nif: string;
    email: string;
    phone: string;
    firstName: string;
    firstSurname: string;
    secondSurname?: string | null;
    user?: string | null;
    courses?: Array<string>;
    modules?: Array<string>;
    createdAt?: string;
    updatedAt?: string;
    /**
     * Return courses from the modules assigned to the teacher
     */
    readonly coursesFromModules?: Array<string>;
    readonly fullName?: string;
};

