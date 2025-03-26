/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PdfDownload_pdf_read_timestamps } from '../models/PdfDownload_pdf_read_timestamps';
import type { PdfDownload_pdf_write } from '../models/PdfDownload_pdf_write';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PdfDownloadService {
    /**
     * Retrieves the collection of PdfDownload resources.
     * Retrieves the collection of PdfDownload resources.
     * @param page The collection page number
     * @param itemsPerPage The number of items per page
     * @param orderUserFirstName
     * @param orderCompanyName
     * @param id
     * @param idArray
     * @param documentNumber
     * @param fileType
     * @param fileTypeArray
     * @param company
     * @param companyArray
     * @param course
     * @param courseArray
     * @param companyName
     * @param user
     * @param userArray
     * @param regexpDocumentNumber Filter using a regex.
     * @param orderId
     * @param orderFileType
     * @param orderCustomData
     * @param orderDocumentNumber
     * @param orderIncludeRelated
     * @param orderCreatedAt
     * @param orderUpdatedAt
     * @returns PdfDownload_pdf_read_timestamps PdfDownload collection
     * @throws ApiError
     */
    public static apiPdfDownloadsGetCollection(
        page: number = 1,
        itemsPerPage: number = 30,
        orderUserFirstName: 'asc' | 'desc' = 'asc',
        orderCompanyName: 'asc' | 'desc' = 'asc',
        id?: number,
        idArray?: Array<number>,
        documentNumber?: string,
        fileType?: string,
        fileTypeArray?: Array<string>,
        company?: string,
        companyArray?: Array<string>,
        course?: string,
        courseArray?: Array<string>,
        companyName?: string,
        user?: string,
        userArray?: Array<string>,
        regexpDocumentNumber?: string,
        orderId: 'asc' | 'desc' = 'asc',
        orderFileType: 'asc' | 'desc' = 'asc',
        orderCustomData: 'asc' | 'desc' = 'asc',
        orderDocumentNumber: 'asc' | 'desc' = 'asc',
        orderIncludeRelated: 'asc' | 'desc' = 'asc',
        orderCreatedAt: 'asc' | 'desc' = 'asc',
        orderUpdatedAt: 'asc' | 'desc' = 'asc',
    ): CancelablePromise<Array<PdfDownload_pdf_read_timestamps>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/pdf_downloads',
            query: {
                'page': page,
                'itemsPerPage': itemsPerPage,
                'order[user.firstName]': orderUserFirstName,
                'order[company.name]': orderCompanyName,
                'id': id,
                'id[]': idArray,
                'documentNumber': documentNumber,
                'fileType': fileType,
                'fileType[]': fileTypeArray,
                'company': company,
                'company[]': companyArray,
                'course': course,
                'course[]': courseArray,
                'company.name': companyName,
                'user': user,
                'user[]': userArray,
                'regexp[documentNumber]': regexpDocumentNumber,
                'order[id]': orderId,
                'order[fileType]': orderFileType,
                'order[customData]': orderCustomData,
                'order[documentNumber]': orderDocumentNumber,
                'order[includeRelated]': orderIncludeRelated,
                'order[createdAt]': orderCreatedAt,
                'order[updatedAt]': orderUpdatedAt,
            },
        });
    }
    /**
     * Creates the PDFDownload result and downloads the generated pdf.
     * Generate a PDF file (or a zip with several files) and stores received data to the database.
     * @param requestBody The new PdfDownload resource
     * @returns binary Genarated PDF file
     * @throws ApiError
     */
    public static pdfDownload(
        requestBody: PdfDownload_pdf_write,
    ): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/pdf_downloads',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Not found`,
                422: `Unprocessable Entity`,
            },
        });
    }
    /**
     * Retrieves a PdfDownload resource.
     * Retrieves a PdfDownload resource.
     * @param id PdfDownload identifier
     * @returns PdfDownload_pdf_read_timestamps PdfDownload resource
     * @throws ApiError
     */
    public static apiPdfDownloadsIdGet(
        id: string,
    ): CancelablePromise<PdfDownload_pdf_read_timestamps> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/pdf_downloads/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * Downloads the generated PDF file for.
     * Downloads the generated PDF file (or a zip with several files) for the given PDfDownload resource.
     * @param id PdfDownload identifier
     * @returns binary Genarated PDF file
     * @throws ApiError
     */
    public static pdfDownloadDownload(
        id: string,
    ): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/pdf_downloads/{id}/download',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                404: `Not found`,
                422: `Unprocessable Entity`,
            },
        });
    }
}
