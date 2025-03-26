/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Company_company_read_timestamps } from '../models/Company_company_read_timestamps';
import type { Company_company_write } from '../models/Company_company_write';
import type { Company_CsvFileRequestBodyDto_csv_write } from '../models/Company_CsvFileRequestBodyDto_csv_write';
import type { Company_CsvImportResultDto_csv_read } from '../models/Company_CsvImportResultDto_csv_read';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CompanyService {
    /**
     * Retrieves the collection of Company resources.
     * Retrieves the collection of Company resources.
     * @param page The collection page number
     * @param itemsPerPage The number of items per page
     * @param nif
     * @param name
     * @param id
     * @param idArray
     * @param legalNature
     * @param legalNatureArray
     * @param agreementCode
     * @param orderId
     * @param orderName
     * @param orderActivity
     * @param orderNumberOfWorkers
     * @param orderWorkersRepresentation
     * @param orderNif
     * @param orderAddress
     * @param orderCity
     * @param orderPostalCode
     * @param orderTutorName
     * @param orderTutorNif
     * @param orderPhone
     * @param orderAgreementCode
     * @param orderSignatureDate
     * @param orderEmail
     * @param orderTutorMail
     * @param orderTutorPhone
     * @param orderCountry
     * @param orderProvince
     * @param orderLegalNature
     * @param orderTutorLastName
     * @param orderRepresentativeName
     * @param orderRepresentativeNif
     * @param orderRepresentativeMail
     * @param orderRepresentativePhone
     * @param orderRepresentativePosition
     * @param orderRepresentativeNormativeBasis
     * @param orderRepresentativeAppointedBy
     * @param orderRepresentativeName2
     * @param orderRepresentativeNif2
     * @param orderRepresentativeMail2
     * @param orderRepresentativePhone2
     * @param orderRepresentativePosition2
     * @param orderRepresentativeNormativeBasis2
     * @param orderRepresentativeAppointedBy2
     * @param orderCreatedAt
     * @param orderUpdatedAt
     * @returns Company_company_read_timestamps Company collection
     * @throws ApiError
     */
    public static apiCompaniesGetCollection(
        page: number = 1,
        itemsPerPage: number = 30,
        nif?: string,
        name?: string,
        id?: number,
        idArray?: Array<number>,
        legalNature?: string,
        legalNatureArray?: Array<string>,
        agreementCode?: string,
        orderId: 'asc' | 'desc' = 'asc',
        orderName: 'asc' | 'desc' = 'asc',
        orderActivity: 'asc' | 'desc' = 'asc',
        orderNumberOfWorkers: 'asc' | 'desc' = 'asc',
        orderWorkersRepresentation: 'asc' | 'desc' = 'asc',
        orderNif: 'asc' | 'desc' = 'asc',
        orderAddress: 'asc' | 'desc' = 'asc',
        orderCity: 'asc' | 'desc' = 'asc',
        orderPostalCode: 'asc' | 'desc' = 'asc',
        orderTutorName: 'asc' | 'desc' = 'asc',
        orderTutorNif: 'asc' | 'desc' = 'asc',
        orderPhone: 'asc' | 'desc' = 'asc',
        orderAgreementCode: 'asc' | 'desc' = 'asc',
        orderSignatureDate: 'asc' | 'desc' = 'asc',
        orderEmail: 'asc' | 'desc' = 'asc',
        orderTutorMail: 'asc' | 'desc' = 'asc',
        orderTutorPhone: 'asc' | 'desc' = 'asc',
        orderCountry: 'asc' | 'desc' = 'asc',
        orderProvince: 'asc' | 'desc' = 'asc',
        orderLegalNature: 'asc' | 'desc' = 'asc',
        orderTutorLastName: 'asc' | 'desc' = 'asc',
        orderRepresentativeName: 'asc' | 'desc' = 'asc',
        orderRepresentativeNif: 'asc' | 'desc' = 'asc',
        orderRepresentativeMail: 'asc' | 'desc' = 'asc',
        orderRepresentativePhone: 'asc' | 'desc' = 'asc',
        orderRepresentativePosition: 'asc' | 'desc' = 'asc',
        orderRepresentativeNormativeBasis: 'asc' | 'desc' = 'asc',
        orderRepresentativeAppointedBy: 'asc' | 'desc' = 'asc',
        orderRepresentativeName2: 'asc' | 'desc' = 'asc',
        orderRepresentativeNif2: 'asc' | 'desc' = 'asc',
        orderRepresentativeMail2: 'asc' | 'desc' = 'asc',
        orderRepresentativePhone2: 'asc' | 'desc' = 'asc',
        orderRepresentativePosition2: 'asc' | 'desc' = 'asc',
        orderRepresentativeNormativeBasis2: 'asc' | 'desc' = 'asc',
        orderRepresentativeAppointedBy2: 'asc' | 'desc' = 'asc',
        orderCreatedAt: 'asc' | 'desc' = 'asc',
        orderUpdatedAt: 'asc' | 'desc' = 'asc',
    ): CancelablePromise<Array<Company_company_read_timestamps>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/companies',
            query: {
                'page': page,
                'itemsPerPage': itemsPerPage,
                'nif': nif,
                'name': name,
                'id': id,
                'id[]': idArray,
                'legalNature': legalNature,
                'legalNature[]': legalNatureArray,
                'agreementCode': agreementCode,
                'order[id]': orderId,
                'order[name]': orderName,
                'order[activity]': orderActivity,
                'order[numberOfWorkers]': orderNumberOfWorkers,
                'order[workersRepresentation]': orderWorkersRepresentation,
                'order[nif]': orderNif,
                'order[address]': orderAddress,
                'order[city]': orderCity,
                'order[postalCode]': orderPostalCode,
                'order[tutorName]': orderTutorName,
                'order[tutorNif]': orderTutorNif,
                'order[phone]': orderPhone,
                'order[agreementCode]': orderAgreementCode,
                'order[signatureDate]': orderSignatureDate,
                'order[email]': orderEmail,
                'order[tutorMail]': orderTutorMail,
                'order[tutorPhone]': orderTutorPhone,
                'order[country]': orderCountry,
                'order[province]': orderProvince,
                'order[legalNature]': orderLegalNature,
                'order[tutorLastName]': orderTutorLastName,
                'order[representativeName]': orderRepresentativeName,
                'order[representativeNif]': orderRepresentativeNif,
                'order[representativeMail]': orderRepresentativeMail,
                'order[representativePhone]': orderRepresentativePhone,
                'order[representativePosition]': orderRepresentativePosition,
                'order[representativeNormativeBasis]': orderRepresentativeNormativeBasis,
                'order[representativeAppointedBy]': orderRepresentativeAppointedBy,
                'order[representativeName2]': orderRepresentativeName2,
                'order[representativeNif2]': orderRepresentativeNif2,
                'order[representativeMail2]': orderRepresentativeMail2,
                'order[representativePhone2]': orderRepresentativePhone2,
                'order[representativePosition2]': orderRepresentativePosition2,
                'order[representativeNormativeBasis2]': orderRepresentativeNormativeBasis2,
                'order[representativeAppointedBy2]': orderRepresentativeAppointedBy2,
                'order[createdAt]': orderCreatedAt,
                'order[updatedAt]': orderUpdatedAt,
            },
        });
    }
    /**
     * Creates a Company resource.
     * Creates a Company resource.
     * @param requestBody The new Company resource
     * @returns Company_company_read_timestamps Company resource created
     * @throws ApiError
     */
    public static apiCompaniesPost(
        requestBody: Company_company_write,
    ): CancelablePromise<Company_company_read_timestamps> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/companies',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid input`,
                422: `Unprocessable entity`,
            },
        });
    }
    /**
     * Creates a Company resource.
     * Creates a Company resource.
     * @param formData The new Company resource
     * @returns Company_CsvImportResultDto_csv_read Company resource created
     * @throws ApiError
     */
    public static apiCompaniesimportPost(
        formData: Company_CsvFileRequestBodyDto_csv_write,
    ): CancelablePromise<Company_CsvImportResultDto_csv_read> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/companies/import',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Invalid input`,
                422: `Unprocessable entity`,
            },
        });
    }
    /**
     * Retrieves a Company resource.
     * Retrieves a Company resource.
     * @param id Company identifier
     * @returns Company_company_read_timestamps Company resource
     * @throws ApiError
     */
    public static apiCompaniesIdGet(
        id: string,
    ): CancelablePromise<Company_company_read_timestamps> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/companies/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * Replaces the Company resource.
     * Replaces the Company resource.
     * @param id Company identifier
     * @param requestBody The updated Company resource
     * @returns Company_company_read_timestamps Company resource updated
     * @throws ApiError
     */
    public static apiCompaniesIdPut(
        id: string,
        requestBody: Company_company_write,
    ): CancelablePromise<Company_company_read_timestamps> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/companies/{id}',
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
     * Removes the Company resource.
     * Removes the Company resource.
     * @param id Company identifier
     * @returns void
     * @throws ApiError
     */
    public static apiCompaniesIdDelete(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/companies/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
}
