/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Module_CsvFileRequestBodyDto_csv_write } from '../models/Module_CsvFileRequestBodyDto_csv_write';
import type { Module_CsvImportResultDto_csv_read } from '../models/Module_CsvImportResultDto_csv_read';
import type { Module_module_read_timestamps } from '../models/Module_module_read_timestamps';
import type { Module_module_write } from '../models/Module_module_write';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ModuleService {
    /**
     * Retrieves the collection of Module resources.
     * Retrieves the collection of Module resources.
     * @param page The collection page number
     * @param itemsPerPage The number of items per page
     * @param orderId
     * @param orderCode
     * @param orderName
     * @param id
     * @param idArray
     * @param name
     * @param code
     * @param codeArray
     * @param course
     * @param courseArray
     * @param orderCourseName
     * @param codePartial
     * @returns Module_module_read_timestamps Module collection
     * @throws ApiError
     */
    public static apiModulesGetCollection(
        page: number = 1,
        itemsPerPage: number = 30,
        orderId: 'asc' | 'desc' = 'asc',
        orderCode: 'asc' | 'desc' = 'asc',
        orderName: 'asc' | 'desc' = 'asc',
        id?: number,
        idArray?: Array<number>,
        name?: string,
        code?: string,
        codeArray?: Array<string>,
        course?: string,
        courseArray?: Array<string>,
        orderCourseName: 'asc' | 'desc' = 'asc',
        codePartial?: string,
    ): CancelablePromise<Array<Module_module_read_timestamps>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/modules',
            query: {
                'page': page,
                'itemsPerPage': itemsPerPage,
                'order[id]': orderId,
                'order[code]': orderCode,
                'order[name]': orderName,
                'id': id,
                'id[]': idArray,
                'name': name,
                'code': code,
                'code[]': codeArray,
                'course': course,
                'course[]': courseArray,
                'order[course.name]': orderCourseName,
                'code_partial': codePartial,
            },
        });
    }
    /**
     * Creates a Module resource.
     * Creates a Module resource.
     * @param requestBody The new Module resource
     * @returns Module_module_read_timestamps Module resource created
     * @throws ApiError
     */
    public static apiModulesPost(
        requestBody: Module_module_write,
    ): CancelablePromise<Module_module_read_timestamps> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/modules',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid input`,
                422: `Unprocessable entity`,
            },
        });
    }
    /**
     * Creates a Module resource.
     * Creates a Module resource.
     * @param formData The new Module resource
     * @returns Module_CsvImportResultDto_csv_read Module resource created
     * @throws ApiError
     */
    public static apiModulesimportPost(
        formData: Module_CsvFileRequestBodyDto_csv_write,
    ): CancelablePromise<Module_CsvImportResultDto_csv_read> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/modules/import',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Invalid input`,
                422: `Unprocessable entity`,
            },
        });
    }
    /**
     * Retrieves a Module resource.
     * Retrieves a Module resource.
     * @param id Module identifier
     * @returns Module_module_read_timestamps Module resource
     * @throws ApiError
     */
    public static apiModulesIdGet(
        id: string,
    ): CancelablePromise<Module_module_read_timestamps> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/modules/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * Replaces the Module resource.
     * Replaces the Module resource.
     * @param id Module identifier
     * @param requestBody The updated Module resource
     * @returns Module_module_read_timestamps Module resource updated
     * @throws ApiError
     */
    public static apiModulesIdPut(
        id: string,
        requestBody: Module_module_write,
    ): CancelablePromise<Module_module_read_timestamps> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/modules/{id}',
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
     * Removes the Module resource.
     * Removes the Module resource.
     * @param id Module identifier
     * @returns void
     * @throws ApiError
     */
    public static apiModulesIdDelete(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/modules/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
}
