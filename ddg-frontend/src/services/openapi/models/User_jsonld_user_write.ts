/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Teacher_jsonld_user_write } from './Teacher_jsonld_user_write';
export type User_jsonld_user_write = {
    email: string;
    /**
     * The user roles
     */
    roles: Array<'ROLE_ADMIN' | 'ROLE_EDITOR' | 'ROLE_VIEWER' | 'ROLE_TEACHER' | 'ROLE_USER'>;
    /**
     * The hashed password
     */
    password: string;
    teacher?: (Teacher_jsonld_user_write | null);
    userName: string;
    firstName: string;
    firstSurname: string;
    secondSurname?: string | null;
};

