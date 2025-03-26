/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CsvTemplateService {
    /**
     * Get CSV template for the specified resource
     * Get CSV template for the specified resource
     * @param resource CsvTemplate identifier
     * @param delimiter CSV delimiter character
     * @param enclosure CSV enclosure character
     * @param encoding CSV encoding
     * @returns binary CSV template file
     * @throws ApiError
     */
    public static csvTemplateGet(
        resource: string,
        delimiter?: ';' | ',',
        enclosure?: '"' | '\'',
        encoding?: 'ISO-8859-1' | 'UTF-8' | 'ISO-8859-15',
    ): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/csv/{resource}/template',
            path: {
                'resource': resource,
            },
            query: {
                'delimiter': delimiter,
                'enclosure': enclosure,
                'encoding': encoding,
            },
            errors: {
                400: `Bad Request`,
                404: `Not found`,
                422: `Unprocessable Entity`,
            },
        });
    }
}
