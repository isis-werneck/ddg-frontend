/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class LoginCheckService {
    /**
     * Creates a user token.
     * Creates a user token.
     * @param requestBody The login data
     * @returns any User token created
     * @throws ApiError
     */
    public static loginCheckPost(
        requestBody: {
            username: string;
            password: string;
        },
    ): CancelablePromise<{
        readonly token: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/login',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
