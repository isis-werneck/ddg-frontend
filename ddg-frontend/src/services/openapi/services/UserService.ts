/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User_user_read_timestamps } from '../models/User_user_read_timestamps';
import type { User_user_read_user_read_me } from '../models/User_user_read_user_read_me';
import type { User_user_write } from '../models/User_user_write';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UserService {
    /**
     * Retrieves a User resource.
     * Retrieves a User resource.
     * @returns User_user_read_user_read_me User resource
     * @throws ApiError
     */
    public static apiMeGet(): CancelablePromise<User_user_read_user_read_me> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/me',
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * Retrieves the collection of User resources.
     * Retrieves the collection of User resources.
     * @param page The collection page number
     * @param itemsPerPage The number of items per page
     * @param orderId
     * @param orderEmail
     * @param orderRoles
     * @param orderPassword
     * @param orderUserName
     * @param orderFirstName
     * @param orderFirstSurname
     * @param orderSecondSurname
     * @param orderCreatedAt
     * @param orderUpdatedAt
     * @param email
     * @param emailArray
     * @param id
     * @param idArray
     * @param userName
     * @param userNameArray
     * @param hasRole Filter Users by role.
     * @param existsTeacher
     * @param userNamePartial
     * @param emailPartial
     * @returns User_user_read_timestamps User collection
     * @throws ApiError
     */
    public static apiUsersGetCollection(
        page: number = 1,
        itemsPerPage: number = 30,
        orderId: 'asc' | 'desc' = 'asc',
        orderEmail: 'asc' | 'desc' = 'asc',
        orderRoles: 'asc' | 'desc' = 'asc',
        orderPassword: 'asc' | 'desc' = 'asc',
        orderUserName: 'asc' | 'desc' = 'asc',
        orderFirstName: 'asc' | 'desc' = 'asc',
        orderFirstSurname: 'asc' | 'desc' = 'asc',
        orderSecondSurname: 'asc' | 'desc' = 'asc',
        orderCreatedAt: 'asc' | 'desc' = 'asc',
        orderUpdatedAt: 'asc' | 'desc' = 'asc',
        email?: string,
        emailArray?: Array<string>,
        id?: number,
        idArray?: Array<number>,
        userName?: string,
        userNameArray?: Array<string>,
        hasRole?: 'ROLE_ADMIN' | 'ROLE_EDITOR' | 'ROLE_VIEWER' | 'ROLE_TEACHER' | 'ROLE_USER',
        existsTeacher?: boolean,
        userNamePartial?: string,
        emailPartial?: string,
    ): CancelablePromise<Array<User_user_read_timestamps>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/users',
            query: {
                'page': page,
                'itemsPerPage': itemsPerPage,
                'order[id]': orderId,
                'order[email]': orderEmail,
                'order[roles]': orderRoles,
                'order[password]': orderPassword,
                'order[userName]': orderUserName,
                'order[firstName]': orderFirstName,
                'order[firstSurname]': orderFirstSurname,
                'order[secondSurname]': orderSecondSurname,
                'order[createdAt]': orderCreatedAt,
                'order[updatedAt]': orderUpdatedAt,
                'email': email,
                'email[]': emailArray,
                'id': id,
                'id[]': idArray,
                'userName': userName,
                'userName[]': userNameArray,
                'has_role': hasRole,
                'exists[teacher]': existsTeacher,
                'userName_partial': userNamePartial,
                'email_partial': emailPartial,
            },
        });
    }
    /**
     * Creates a User resource.
     * Creates a User resource.
     * @param requestBody The new User resource
     * @returns User_user_read_timestamps User resource created
     * @throws ApiError
     */
    public static apiUsersPost(
        requestBody: User_user_write,
    ): CancelablePromise<User_user_read_timestamps> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/users',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid input`,
                422: `Unprocessable entity`,
            },
        });
    }
    /**
     * Retrieves a User resource.
     * Retrieves a User resource.
     * @param id User identifier
     * @returns User_user_read_timestamps User resource
     * @throws ApiError
     */
    public static apiUsersIdGet(
        id: string,
    ): CancelablePromise<User_user_read_timestamps> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/users/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * Replaces the User resource.
     * Replaces the User resource.
     * @param id User identifier
     * @param requestBody The updated User resource
     * @returns User_user_read_timestamps User resource updated
     * @throws ApiError
     */
    public static apiUsersIdPut(
        id: string,
        requestBody: User_user_write,
    ): CancelablePromise<User_user_read_timestamps> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/users/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid input`,
                404: `Resource not found`,
                422: `Unprocessable entity`,
            },
        });
    }
    /**
     * Removes the User resource.
     * Removes the User resource.
     * @param id User identifier
     * @returns void
     * @throws ApiError
     */
    public static apiUsersIdDelete(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/users/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
}
