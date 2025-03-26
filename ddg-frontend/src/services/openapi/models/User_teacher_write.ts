/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type User_teacher_write = {
    email: string;
    /**
     * The user roles
     */
    roles: Array<'ROLE_ADMIN' | 'ROLE_EDITOR' | 'ROLE_VIEWER' | 'ROLE_TEACHER' | 'ROLE_USER'>;
    /**
     * The hashed password
     */
    password: string;
    userName: string;
    firstName: string;
    firstSurname: string;
    secondSurname?: string | null;
};

