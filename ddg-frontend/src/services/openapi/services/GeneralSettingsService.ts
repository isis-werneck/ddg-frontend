/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GeneralSettings_generalSettings_read_timestamps } from '../models/GeneralSettings_generalSettings_read_timestamps';
import type { GeneralSettings_generalSettings_write } from '../models/GeneralSettings_generalSettings_write';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class GeneralSettingsService {
    /**
     * Retrieves the collection of GeneralSettings resources.
     * Retrieves the collection of GeneralSettings resources.
     * @param page The collection page number
     * @param itemsPerPage The number of items per page
     * @param regexpSettingsKey Filter using a regex.
     * @param regexpSettingsDescription Filter using a regex.
     * @param regexpSettingsValue Filter using a regex.
     * @param orderId
     * @param orderSettingsKey
     * @param orderSettingsDescription
     * @param orderSettingsValue
     * @param orderActive
     * @returns GeneralSettings_generalSettings_read_timestamps GeneralSettings collection
     * @throws ApiError
     */
    public static apiGeneralSettingsGetCollection(
        page: number = 1,
        itemsPerPage: number = 30,
        regexpSettingsKey?: string,
        regexpSettingsDescription?: string,
        regexpSettingsValue?: string,
        orderId: 'asc' | 'desc' = 'asc',
        orderSettingsKey: 'asc' | 'desc' = 'asc',
        orderSettingsDescription: 'asc' | 'desc' = 'asc',
        orderSettingsValue: 'asc' | 'desc' = 'asc',
        orderActive: 'asc' | 'desc' = 'asc',
    ): CancelablePromise<Array<GeneralSettings_generalSettings_read_timestamps>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/general_settings',
            query: {
                'page': page,
                'itemsPerPage': itemsPerPage,
                'regexp[settingsKey]': regexpSettingsKey,
                'regexp[settingsDescription]': regexpSettingsDescription,
                'regexp[settingsValue]': regexpSettingsValue,
                'order[id]': orderId,
                'order[settingsKey]': orderSettingsKey,
                'order[settingsDescription]': orderSettingsDescription,
                'order[settingsValue]': orderSettingsValue,
                'order[active]': orderActive,
            },
        });
    }
    /**
     * Creates a GeneralSettings resource.
     * Creates a GeneralSettings resource.
     * @param requestBody The new GeneralSettings resource
     * @returns GeneralSettings_generalSettings_read_timestamps GeneralSettings resource created
     * @throws ApiError
     */
    public static apiGeneralSettingsPost(
        requestBody: GeneralSettings_generalSettings_write,
    ): CancelablePromise<GeneralSettings_generalSettings_read_timestamps> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/general_settings',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid input`,
                422: `Unprocessable entity`,
            },
        });
    }
    /**
     * Retrieves a GeneralSettings resource.
     * Retrieves a GeneralSettings resource.
     * @param id GeneralSettings identifier
     * @returns GeneralSettings_generalSettings_read_timestamps GeneralSettings resource
     * @throws ApiError
     */
    public static apiGeneralSettingsIdGet(
        id: string,
    ): CancelablePromise<GeneralSettings_generalSettings_read_timestamps> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/general_settings/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * Replaces the GeneralSettings resource.
     * Replaces the GeneralSettings resource.
     * @param id GeneralSettings identifier
     * @param requestBody The updated GeneralSettings resource
     * @returns GeneralSettings_generalSettings_read_timestamps GeneralSettings resource updated
     * @throws ApiError
     */
    public static apiGeneralSettingsIdPut(
        id: string,
        requestBody: GeneralSettings_generalSettings_write,
    ): CancelablePromise<GeneralSettings_generalSettings_read_timestamps> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/general_settings/{id}',
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
     * Removes the GeneralSettings resource.
     * Removes the GeneralSettings resource.
     * @param id GeneralSettings identifier
     * @returns void
     * @throws ApiError
     */
    public static apiGeneralSettingsIdDelete(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/general_settings/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
}
