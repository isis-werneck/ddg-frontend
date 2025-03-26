/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Teacher_CsvFileRequestBodyDto_csv_write } from '../models/Teacher_CsvFileRequestBodyDto_csv_write';
import type { Teacher_CsvImportResultDto_csv_read } from '../models/Teacher_CsvImportResultDto_csv_read';
import type { Teacher_teacher_read_timestamps } from '../models/Teacher_teacher_read_timestamps';
import type { Teacher_teacher_write } from '../models/Teacher_teacher_write';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TeacherService {
    /**
     * Retrieves the collection of Teacher resources.
     * Retrieves the collection of Teacher resources.
     * @param page The collection page number
     * @param itemsPerPage The number of items per page
     * @param email
     * @param emailArray
     * @param id
     * @param idArray
     * @param firstName
     * @param firstSurname
     * @param secondSurname
     * @param nif
     * @param user
     * @param userArray
     * @param courses
     * @param coursesArray
     * @param existsCourses
     * @param existsUser
     * @param orderCoursesName
     * @param orderUserUserName
     * @param orderModulesName
     * @param orderId
     * @param orderNif
     * @param orderEmail
     * @param orderPhone
     * @param orderFirstName
     * @param orderFirstSurname
     * @param orderSecondSurname
     * @param orderCreatedAt
     * @param orderUpdatedAt
     * @param emailPartial
     * @returns Teacher_teacher_read_timestamps Teacher collection
     * @throws ApiError
     */
    public static apiTeachersGetCollection(
        page: number = 1,
        itemsPerPage: number = 30,
        email?: string,
        emailArray?: Array<string>,
        id?: number,
        idArray?: Array<number>,
        firstName?: string,
        firstSurname?: string,
        secondSurname?: string,
        nif?: string,
        user?: string,
        userArray?: Array<string>,
        courses?: string,
        coursesArray?: Array<string>,
        existsCourses?: boolean,
        existsUser?: boolean,
        orderCoursesName: 'asc' | 'desc' = 'asc',
        orderUserUserName: 'asc' | 'desc' = 'asc',
        orderModulesName: 'asc' | 'desc' = 'asc',
        orderId: 'asc' | 'desc' = 'asc',
        orderNif: 'asc' | 'desc' = 'asc',
        orderEmail: 'asc' | 'desc' = 'asc',
        orderPhone: 'asc' | 'desc' = 'asc',
        orderFirstName: 'asc' | 'desc' = 'asc',
        orderFirstSurname: 'asc' | 'desc' = 'asc',
        orderSecondSurname: 'asc' | 'desc' = 'asc',
        orderCreatedAt: 'asc' | 'desc' = 'asc',
        orderUpdatedAt: 'asc' | 'desc' = 'asc',
        emailPartial?: string,
    ): CancelablePromise<Array<Teacher_teacher_read_timestamps>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/teachers',
            query: {
                'page': page,
                'itemsPerPage': itemsPerPage,
                'email': email,
                'email[]': emailArray,
                'id': id,
                'id[]': idArray,
                'firstName': firstName,
                'firstSurname': firstSurname,
                'secondSurname': secondSurname,
                'nif': nif,
                'user': user,
                'user[]': userArray,
                'courses': courses,
                'courses[]': coursesArray,
                'exists[courses]': existsCourses,
                'exists[user]': existsUser,
                'order[courses.name]': orderCoursesName,
                'order[user.userName]': orderUserUserName,
                'order[modules.name]': orderModulesName,
                'order[id]': orderId,
                'order[nif]': orderNif,
                'order[email]': orderEmail,
                'order[phone]': orderPhone,
                'order[firstName]': orderFirstName,
                'order[firstSurname]': orderFirstSurname,
                'order[secondSurname]': orderSecondSurname,
                'order[createdAt]': orderCreatedAt,
                'order[updatedAt]': orderUpdatedAt,
                'email_partial': emailPartial,
            },
        });
    }
    /**
     * Creates a Teacher resource.
     * Creates a Teacher resource.
     * @param requestBody The new Teacher resource
     * @returns Teacher_teacher_read_timestamps Teacher resource created
     * @throws ApiError
     */
    public static apiTeachersPost(
        requestBody: Teacher_teacher_write,
    ): CancelablePromise<Teacher_teacher_read_timestamps> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/teachers',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid input`,
                422: `Unprocessable entity`,
            },
        });
    }
    /**
     * Creates a Teacher resource.
     * Creates a Teacher resource.
     * @param formData The new Teacher resource
     * @returns Teacher_CsvImportResultDto_csv_read Teacher resource created
     * @throws ApiError
     */
    public static apiTeachersimportPost(
        formData: Teacher_CsvFileRequestBodyDto_csv_write,
    ): CancelablePromise<Teacher_CsvImportResultDto_csv_read> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/teachers/import',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Invalid input`,
                422: `Unprocessable entity`,
            },
        });
    }
    /**
     * Retrieves a Teacher resource.
     * Retrieves a Teacher resource.
     * @param id Teacher identifier
     * @returns Teacher_teacher_read_timestamps Teacher resource
     * @throws ApiError
     */
    public static apiTeachersIdGet(
        id: string,
    ): CancelablePromise<Teacher_teacher_read_timestamps> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/teachers/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * Replaces the Teacher resource.
     * Replaces the Teacher resource.
     * @param id Teacher identifier
     * @param requestBody The updated Teacher resource
     * @returns Teacher_teacher_read_timestamps Teacher resource updated
     * @throws ApiError
     */
    public static apiTeachersIdPut(
        id: string,
        requestBody: Teacher_teacher_write,
    ): CancelablePromise<Teacher_teacher_read_timestamps> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/teachers/{id}',
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
     * Removes the Teacher resource.
     * Removes the Teacher resource.
     * @param id Teacher identifier
     * @returns void
     * @throws ApiError
     */
    public static apiTeachersIdDelete(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/teachers/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
}
