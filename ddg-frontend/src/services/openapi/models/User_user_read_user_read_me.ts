/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type User_user_read_user_read_me = {
    readonly id?: number;
    email: string;
    /**
     * The user roles
     */
    roles: Array<'ROLE_ADMIN' | 'ROLE_EDITOR' | 'ROLE_VIEWER' | 'ROLE_TEACHER' | 'ROLE_USER'>;
    teacher?: string | null;
    userName: string;
    firstName: string;
    firstSurname: string;
    secondSurname?: string | null;
};

