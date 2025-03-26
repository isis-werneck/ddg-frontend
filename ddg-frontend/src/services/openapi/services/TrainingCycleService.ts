/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TrainingCycle_CsvFileRequestBodyDto_csv_write } from '../models/TrainingCycle_CsvFileRequestBodyDto_csv_write';
import type { TrainingCycle_CsvImportResultDto_csv_read } from '../models/TrainingCycle_CsvImportResultDto_csv_read';
import type { TrainingCycle_training_cycle_read_timestamps } from '../models/TrainingCycle_training_cycle_read_timestamps';
import type { TrainingCycle_training_cycle_write } from '../models/TrainingCycle_training_cycle_write';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TrainingCycleService {
    /**
     * Retrieves the collection of TrainingCycle resources.
     * Retrieves the collection of TrainingCycle resources.
     * @param page The collection page number
     * @param itemsPerPage The number of items per page
     * @param orderId
     * @param orderCode
     * @param orderName
     * @param orderRegime
     * @param id
     * @param idArray
     * @param name
     * @param code
     * @param codeArray
     * @param orderProfessionalFamilyName
     * @param codePartial
     * @returns TrainingCycle_training_cycle_read_timestamps TrainingCycle collection
     * @throws ApiError
     */
    public static apiTrainingCyclesGetCollection(
        page: number = 1,
        itemsPerPage: number = 30,
        orderId: 'asc' | 'desc' = 'asc',
        orderCode: 'asc' | 'desc' = 'asc',
        orderName: 'asc' | 'desc' = 'asc',
        orderRegime: 'asc' | 'desc' = 'asc',
        id?: number,
        idArray?: Array<number>,
        name?: string,
        code?: string,
        codeArray?: Array<string>,
        orderProfessionalFamilyName: 'asc' | 'desc' = 'asc',
        codePartial?: string,
    ): CancelablePromise<Array<TrainingCycle_training_cycle_read_timestamps>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/training_cycles',
            query: {
                'page': page,
                'itemsPerPage': itemsPerPage,
                'order[id]': orderId,
                'order[code]': orderCode,
                'order[name]': orderName,
                'order[regime]': orderRegime,
                'id': id,
                'id[]': idArray,
                'name': name,
                'code': code,
                'code[]': codeArray,
                'order[professionalFamily.name]': orderProfessionalFamilyName,
                'code_partial': codePartial,
            },
        });
    }
    /**
     * Creates a TrainingCycle resource.
     * Creates a TrainingCycle resource.
     * @param requestBody The new TrainingCycle resource
     * @returns TrainingCycle_training_cycle_read_timestamps TrainingCycle resource created
     * @throws ApiError
     */
    public static apiTrainingCyclesPost(
        requestBody: TrainingCycle_training_cycle_write,
    ): CancelablePromise<TrainingCycle_training_cycle_read_timestamps> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/training_cycles',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid input`,
                422: `Unprocessable entity`,
            },
        });
    }
    /**
     * Creates a TrainingCycle resource.
     * Creates a TrainingCycle resource.
     * @param formData The new TrainingCycle resource
     * @returns TrainingCycle_CsvImportResultDto_csv_read TrainingCycle resource created
     * @throws ApiError
     */
    public static apiTrainingCyclesimportPost(
        formData: TrainingCycle_CsvFileRequestBodyDto_csv_write,
    ): CancelablePromise<TrainingCycle_CsvImportResultDto_csv_read> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/training_cycles/import',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Invalid input`,
                422: `Unprocessable entity`,
            },
        });
    }
    /**
     * Retrieves a TrainingCycle resource.
     * Retrieves a TrainingCycle resource.
     * @param id TrainingCycle identifier
     * @returns TrainingCycle_training_cycle_read_timestamps TrainingCycle resource
     * @throws ApiError
     */
    public static apiTrainingCyclesIdGet(
        id: string,
    ): CancelablePromise<TrainingCycle_training_cycle_read_timestamps> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/training_cycles/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * Replaces the TrainingCycle resource.
     * Replaces the TrainingCycle resource.
     * @param id TrainingCycle identifier
     * @param requestBody The updated TrainingCycle resource
     * @returns TrainingCycle_training_cycle_read_timestamps TrainingCycle resource updated
     * @throws ApiError
     */
    public static apiTrainingCyclesIdPut(
        id: string,
        requestBody: TrainingCycle_training_cycle_write,
    ): CancelablePromise<TrainingCycle_training_cycle_read_timestamps> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/training_cycles/{id}',
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
     * Removes the TrainingCycle resource.
     * Removes the TrainingCycle resource.
     * @param id TrainingCycle identifier
     * @returns void
     * @throws ApiError
     */
    public static apiTrainingCyclesIdDelete(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/training_cycles/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
}
