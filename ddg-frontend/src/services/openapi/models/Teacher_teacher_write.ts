/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User_teacher_write } from './User_teacher_write';
export type Teacher_teacher_write = {
    nif: string;
    email: string;
    phone: string;
    firstName: string;
    firstSurname: string;
    secondSurname?: string | null;
    user?: (User_teacher_write | null);
    courses?: Array<string>;
    modules?: Array<string>;
};

