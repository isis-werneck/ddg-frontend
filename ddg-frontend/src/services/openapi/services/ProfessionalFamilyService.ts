/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProfessionalFamily_CsvFileRequestBodyDto_csv_write } from '../models/ProfessionalFamily_CsvFileRequestBodyDto_csv_write';
import type { ProfessionalFamily_CsvImportResultDto_csv_read } from '../models/ProfessionalFamily_CsvImportResultDto_csv_read';
import type { ProfessionalFamily_professional_family_read_timestamps } from '../models/ProfessionalFamily_professional_family_read_timestamps';
import type { ProfessionalFamily_professional_family_write } from '../models/ProfessionalFamily_professional_family_write';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ProfessionalFamilyService {
    /**
     * Retrieves the collection of ProfessionalFamily resources.
     * Retrieves the collection of ProfessionalFamily resources.
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
     * @param codePartial
     * @returns ProfessionalFamily_professional_family_read_timestamps ProfessionalFamily collection
     * @throws ApiError
     */
    public static apiProfessionalFamiliesGetCollection(
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
        codePartial?: string,
    ): CancelablePromise<Array<ProfessionalFamily_professional_family_read_timestamps>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/professional_families',
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
                'code_partial': codePartial,
            },
        });
    }
    /**
     * Creates a ProfessionalFamily resource.
     * Creates a ProfessionalFamily resource.
     * @param requestBody The new ProfessionalFamily resource
     * @returns ProfessionalFamily_professional_family_read_timestamps ProfessionalFamily resource created
     * @throws ApiError
     */
    public static apiProfessionalFamiliesPost(
        requestBody: ProfessionalFamily_professional_family_write,
    ): CancelablePromise<ProfessionalFamily_professional_family_read_timestamps> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/professional_families',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid input`,
                422: `Unprocessable entity`,
            },
        });
    }
    /**
     * Creates a ProfessionalFamily resource.
     * Creates a ProfessionalFamily resource.
     * @param formData The new ProfessionalFamily resource
     * @returns ProfessionalFamily_CsvImportResultDto_csv_read ProfessionalFamily resource created
     * @throws ApiError
     */
    public static apiProfessionalFamiliesimportPost(
        formData: ProfessionalFamily_CsvFileRequestBodyDto_csv_write,
    ): CancelablePromise<ProfessionalFamily_CsvImportResultDto_csv_read> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/professional_families/import',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Invalid input`,
                422: `Unprocessable entity`,
            },
        });
    }
    /**
     * Retrieves a ProfessionalFamily resource.
     * Retrieves a ProfessionalFamily resource.
     * @param id ProfessionalFamily identifier
     * @returns ProfessionalFamily_professional_family_read_timestamps ProfessionalFamily resource
     * @throws ApiError
     */
    public static apiProfessionalFamiliesIdGet(
        id: string,
    ): CancelablePromise<ProfessionalFamily_professional_family_read_timestamps> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/professional_families/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * Replaces the ProfessionalFamily resource.
     * Replaces the ProfessionalFamily resource.
     * @param id ProfessionalFamily identifier
     * @param requestBody The updated ProfessionalFamily resource
     * @returns ProfessionalFamily_professional_family_read_timestamps ProfessionalFamily resource updated
     * @throws ApiError
     */
    public static apiProfessionalFamiliesIdPut(
        id: string,
        requestBody: ProfessionalFamily_professional_family_write,
    ): CancelablePromise<ProfessionalFamily_professional_family_read_timestamps> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/professional_families/{id}',
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
     * Removes the ProfessionalFamily resource.
     * Removes the ProfessionalFamily resource.
     * @param id ProfessionalFamily identifier
     * @returns void
     * @throws ApiError
     */
    public static apiProfessionalFamiliesIdDelete(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/professional_families/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
}
