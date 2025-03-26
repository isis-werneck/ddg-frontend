/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TrainingActionProgram_CsvFileRequestBodyDto_csv_write } from '../models/TrainingActionProgram_CsvFileRequestBodyDto_csv_write';
import type { TrainingActionProgram_CsvImportResultDto_csv_read } from '../models/TrainingActionProgram_CsvImportResultDto_csv_read';
import type { TrainingActionProgram_taprogram_read_timestamps } from '../models/TrainingActionProgram_taprogram_read_timestamps';
import type { TrainingActionProgram_taprogram_write } from '../models/TrainingActionProgram_taprogram_write';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TrainingActionProgramService {
    /**
     * Retrieves the collection of TrainingActionProgram resources.
     * Retrieves the collection of TrainingActionProgram resources.
     * @param page The collection page number
     * @param itemsPerPage The number of items per page
     * @param id
     * @param idArray
     * @param name
     * @param active
     * @param orderId
     * @param orderName
     * @param orderActive
     * @param orderCreatedAt
     * @param orderUpdatedAt
     * @returns TrainingActionProgram_taprogram_read_timestamps TrainingActionProgram collection
     * @throws ApiError
     */
    public static apiTrainingActionProgramsGetCollection(
        page: number = 1,
        itemsPerPage: number = 30,
        id?: number,
        idArray?: Array<number>,
        name?: string,
        active?: boolean,
        orderId: 'asc' | 'desc' = 'asc',
        orderName: 'asc' | 'desc' = 'asc',
        orderActive: 'asc' | 'desc' = 'asc',
        orderCreatedAt: 'asc' | 'desc' = 'asc',
        orderUpdatedAt: 'asc' | 'desc' = 'asc',
    ): CancelablePromise<Array<TrainingActionProgram_taprogram_read_timestamps>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/training_action_programs',
            query: {
                'page': page,
                'itemsPerPage': itemsPerPage,
                'id': id,
                'id[]': idArray,
                'name': name,
                'active': active,
                'order[id]': orderId,
                'order[name]': orderName,
                'order[active]': orderActive,
                'order[createdAt]': orderCreatedAt,
                'order[updatedAt]': orderUpdatedAt,
            },
        });
    }
    /**
     * Creates a TrainingActionProgram resource.
     * Creates a TrainingActionProgram resource.
     * @param requestBody The new TrainingActionProgram resource
     * @returns TrainingActionProgram_taprogram_read_timestamps TrainingActionProgram resource created
     * @throws ApiError
     */
    public static apiTrainingActionProgramsPost(
        requestBody: TrainingActionProgram_taprogram_write,
    ): CancelablePromise<TrainingActionProgram_taprogram_read_timestamps> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/training_action_programs',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid input`,
                422: `Unprocessable entity`,
            },
        });
    }
    /**
     * Creates a TrainingActionProgram resource.
     * Creates a TrainingActionProgram resource.
     * @param formData The new TrainingActionProgram resource
     * @returns TrainingActionProgram_CsvImportResultDto_csv_read TrainingActionProgram resource created
     * @throws ApiError
     */
    public static apiTrainingActionProgramsimportPost(
        formData: TrainingActionProgram_CsvFileRequestBodyDto_csv_write,
    ): CancelablePromise<TrainingActionProgram_CsvImportResultDto_csv_read> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/training_action_programs/import',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Invalid input`,
                422: `Unprocessable entity`,
            },
        });
    }
    /**
     * Retrieves a TrainingActionProgram resource.
     * Retrieves a TrainingActionProgram resource.
     * @param id TrainingActionProgram identifier
     * @returns TrainingActionProgram_taprogram_read_timestamps TrainingActionProgram resource
     * @throws ApiError
     */
    public static apiTrainingActionProgramsIdGet(
        id: string,
    ): CancelablePromise<TrainingActionProgram_taprogram_read_timestamps> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/training_action_programs/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * Replaces the TrainingActionProgram resource.
     * Replaces the TrainingActionProgram resource.
     * @param id TrainingActionProgram identifier
     * @param requestBody The updated TrainingActionProgram resource
     * @returns TrainingActionProgram_taprogram_read_timestamps TrainingActionProgram resource updated
     * @throws ApiError
     */
    public static apiTrainingActionProgramsIdPut(
        id: string,
        requestBody: TrainingActionProgram_taprogram_write,
    ): CancelablePromise<TrainingActionProgram_taprogram_read_timestamps> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/training_action_programs/{id}',
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
     * Removes the TrainingActionProgram resource.
     * Removes the TrainingActionProgram resource.
     * @param id TrainingActionProgram identifier
     * @returns void
     * @throws ApiError
     */
    public static apiTrainingActionProgramsIdDelete(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/training_action_programs/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
}
