/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LearningOutcome_CsvFileRequestBodyDto_csv_write } from '../models/LearningOutcome_CsvFileRequestBodyDto_csv_write';
import type { LearningOutcome_CsvImportResultDto_csv_read } from '../models/LearningOutcome_CsvImportResultDto_csv_read';
import type { LearningOutcome_learning_outcome_read_timestamps } from '../models/LearningOutcome_learning_outcome_read_timestamps';
import type { LearningOutcome_learning_outcome_write } from '../models/LearningOutcome_learning_outcome_write';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class LearningOutcomeService {
    /**
     * Retrieves the collection of LearningOutcome resources.
     * Retrieves the collection of LearningOutcome resources.
     * @param page The collection page number
     * @param itemsPerPage The number of items per page
     * @param orderId
     * @param orderCode
     * @param orderDescription
     * @param id
     * @param idArray
     * @param code
     * @param codeArray
     * @param description
     * @param course
     * @param courseArray
     * @param module
     * @param moduleArray
     * @param courseName
     * @param moduleName
     * @param orderModuleName
     * @param orderCourseName
     * @param codePartial
     * @returns LearningOutcome_learning_outcome_read_timestamps LearningOutcome collection
     * @throws ApiError
     */
    public static apiLearningOutcomesGetCollection(
        page: number = 1,
        itemsPerPage: number = 30,
        orderId: 'asc' | 'desc' = 'asc',
        orderCode: 'asc' | 'desc' = 'asc',
        orderDescription: 'asc' | 'desc' = 'asc',
        id?: number,
        idArray?: Array<number>,
        code?: string,
        codeArray?: Array<string>,
        description?: string,
        course?: string,
        courseArray?: Array<string>,
        module?: string,
        moduleArray?: Array<string>,
        courseName?: string,
        moduleName?: string,
        orderModuleName: 'asc' | 'desc' = '',
        orderCourseName: 'asc' | 'desc' = '',
        codePartial?: string,
    ): CancelablePromise<Array<LearningOutcome_learning_outcome_read_timestamps>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/learning_outcomes',
            query: {
                'page': page,
                'itemsPerPage': itemsPerPage,
                'order[id]': orderId,
                'order[code]': orderCode,
                'order[description]': orderDescription,
                'id': id,
                'id[]': idArray,
                'code': code,
                'code[]': codeArray,
                'description': description,
                'course': course,
                'course[]': courseArray,
                'module': module,
                'module[]': moduleArray,
                'course.name': courseName,
                'module.name': moduleName,
                'order[module.name]': orderModuleName,
                'order[course.name]': orderCourseName,
                'code_partial': codePartial,
            },
        });
    }
    /**
     * Creates a LearningOutcome resource.
     * Creates a LearningOutcome resource.
     * @param requestBody The new LearningOutcome resource
     * @returns LearningOutcome_learning_outcome_read_timestamps LearningOutcome resource created
     * @throws ApiError
     */
    public static apiLearningOutcomesPost(
        requestBody: LearningOutcome_learning_outcome_write,
    ): CancelablePromise<LearningOutcome_learning_outcome_read_timestamps> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/learning_outcomes',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid input`,
                422: `Unprocessable entity`,
            },
        });
    }
    /**
     * Creates a LearningOutcome resource.
     * Creates a LearningOutcome resource.
     * @param formData The new LearningOutcome resource
     * @returns LearningOutcome_CsvImportResultDto_csv_read LearningOutcome resource created
     * @throws ApiError
     */
    public static apiLearningOutcomesimportPost(
        formData: LearningOutcome_CsvFileRequestBodyDto_csv_write,
    ): CancelablePromise<LearningOutcome_CsvImportResultDto_csv_read> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/learning_outcomes/import',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Invalid input`,
                422: `Unprocessable entity`,
            },
        });
    }
    /**
     * Retrieves a LearningOutcome resource.
     * Retrieves a LearningOutcome resource.
     * @param id LearningOutcome identifier
     * @returns LearningOutcome_learning_outcome_read_timestamps LearningOutcome resource
     * @throws ApiError
     */
    public static apiLearningOutcomesIdGet(
        id: string,
    ): CancelablePromise<LearningOutcome_learning_outcome_read_timestamps> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/learning_outcomes/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * Replaces the LearningOutcome resource.
     * Replaces the LearningOutcome resource.
     * @param id LearningOutcome identifier
     * @param requestBody The updated LearningOutcome resource
     * @returns LearningOutcome_learning_outcome_read_timestamps LearningOutcome resource updated
     * @throws ApiError
     */
    public static apiLearningOutcomesIdPut(
        id: string,
        requestBody: LearningOutcome_learning_outcome_write,
    ): CancelablePromise<LearningOutcome_learning_outcome_read_timestamps> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/learning_outcomes/{id}',
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
     * Removes the LearningOutcome resource.
     * Removes the LearningOutcome resource.
     * @param id LearningOutcome identifier
     * @returns void
     * @throws ApiError
     */
    public static apiLearningOutcomesIdDelete(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/learning_outcomes/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
}
