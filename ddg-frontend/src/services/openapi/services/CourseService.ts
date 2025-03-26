/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Course_course_read_timestamps } from '../models/Course_course_read_timestamps';
import type { Course_course_write } from '../models/Course_course_write';
import type { Course_CsvFileRequestBodyDto_csv_write } from '../models/Course_CsvFileRequestBodyDto_csv_write';
import type { Course_CsvImportResultDto_csv_read } from '../models/Course_CsvImportResultDto_csv_read';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CourseService {
    /**
     * Retrieves the collection of Course resources.
     * Retrieves the collection of Course resources.
     * @param page The collection page number
     * @param itemsPerPage The number of items per page
     * @param orderId
     * @param orderType
     * @param orderName
     * @param orderCode
     * @param orderGrade
     * @param orderCourseNumber
     * @param id
     * @param idArray
     * @param type
     * @param typeArray
     * @param code
     * @param name
     * @param grade
     * @param gradeArray
     * @param courseNumber
     * @param courseNumberArray
     * @param trainingCycleName
     * @param trainingCycle
     * @param trainingCycleArray
     * @param existsTutor
     * @param orderTutorFirstName
     * @param orderTrainingCycleName
     * @param codePartial
     * @returns Course_course_read_timestamps Course collection
     * @throws ApiError
     */
    public static apiCoursesGetCollection(
        page: number = 1,
        itemsPerPage: number = 30,
        orderId: 'asc' | 'desc' = 'asc',
        orderType: 'asc' | 'desc' = 'asc',
        orderName: 'asc' | 'desc' = 'asc',
        orderCode: 'asc' | 'desc' = 'asc',
        orderGrade: 'asc' | 'desc' = 'asc',
        orderCourseNumber: 'asc' | 'desc' = 'asc',
        id?: number,
        idArray?: Array<number>,
        type?: string,
        typeArray?: Array<string>,
        code?: string,
        name?: string,
        grade?: string,
        gradeArray?: Array<string>,
        courseNumber?: number,
        courseNumberArray?: Array<number>,
        trainingCycleName?: string,
        trainingCycle?: string,
        trainingCycleArray?: Array<string>,
        existsTutor?: boolean,
        orderTutorFirstName: 'asc' | 'desc' = 'asc',
        orderTrainingCycleName: 'asc' | 'desc' = 'asc',
        codePartial?: string,
    ): CancelablePromise<Array<Course_course_read_timestamps>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/courses',
            query: {
                'page': page,
                'itemsPerPage': itemsPerPage,
                'order[id]': orderId,
                'order[type]': orderType,
                'order[name]': orderName,
                'order[code]': orderCode,
                'order[grade]': orderGrade,
                'order[courseNumber]': orderCourseNumber,
                'id': id,
                'id[]': idArray,
                'type': type,
                'type[]': typeArray,
                'code': code,
                'name': name,
                'grade': grade,
                'grade[]': gradeArray,
                'courseNumber': courseNumber,
                'courseNumber[]': courseNumberArray,
                'trainingCycle.name': trainingCycleName,
                'trainingCycle': trainingCycle,
                'trainingCycle[]': trainingCycleArray,
                'exists[tutor]': existsTutor,
                'order[tutor.firstName]': orderTutorFirstName,
                'order[trainingCycle.name]': orderTrainingCycleName,
                'code_partial': codePartial,
            },
        });
    }
    /**
     * Creates a Course resource.
     * Creates a Course resource.
     * @param requestBody The new Course resource
     * @returns Course_course_read_timestamps Course resource created
     * @throws ApiError
     */
    public static apiCoursesPost(
        requestBody: Course_course_write,
    ): CancelablePromise<Course_course_read_timestamps> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/courses',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid input`,
                422: `Unprocessable entity`,
            },
        });
    }
    /**
     * Creates a Course resource.
     * Creates a Course resource.
     * @param formData The new Course resource
     * @returns Course_CsvImportResultDto_csv_read Course resource created
     * @throws ApiError
     */
    public static apiCoursesimportPost(
        formData: Course_CsvFileRequestBodyDto_csv_write,
    ): CancelablePromise<Course_CsvImportResultDto_csv_read> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/courses/import',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Invalid input`,
                422: `Unprocessable entity`,
            },
        });
    }
    /**
     * Retrieves a Course resource.
     * Retrieves a Course resource.
     * @param id Course identifier
     * @returns Course_course_read_timestamps Course resource
     * @throws ApiError
     */
    public static apiCoursesIdGet(
        id: string,
    ): CancelablePromise<Course_course_read_timestamps> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/courses/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * Replaces the Course resource.
     * Replaces the Course resource.
     * @param id Course identifier
     * @param requestBody The updated Course resource
     * @returns Course_course_read_timestamps Course resource updated
     * @throws ApiError
     */
    public static apiCoursesIdPut(
        id: string,
        requestBody: Course_course_write,
    ): CancelablePromise<Course_course_read_timestamps> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/courses/{id}',
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
     * Removes the Course resource.
     * Removes the Course resource.
     * @param id Course identifier
     * @returns void
     * @throws ApiError
     */
    public static apiCoursesIdDelete(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/courses/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
}
