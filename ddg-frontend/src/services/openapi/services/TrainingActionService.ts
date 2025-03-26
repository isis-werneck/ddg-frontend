/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TrainingAction_CsvFileRequestBodyDto_csv_write } from '../models/TrainingAction_CsvFileRequestBodyDto_csv_write';
import type { TrainingAction_CsvImportResultDto_csv_read } from '../models/TrainingAction_CsvImportResultDto_csv_read';
import type { TrainingAction_taction_read_timestamps } from '../models/TrainingAction_taction_read_timestamps';
import type { TrainingAction_taction_write } from '../models/TrainingAction_taction_write';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TrainingActionService {
    /**
     * Retrieves the collection of TrainingAction resources.
     * Retrieves the collection of TrainingAction resources.
     * @param page The collection page number
     * @param itemsPerPage The number of items per page
     * @param orderId
     * @param orderActionType
     * @param orderTrainingActionCode
     * @param orderTrainingSpecialityName
     * @param orderTrainingSpecialityCode
     * @param orderStartDate
     * @param orderEndDate
     * @param orderJobTitle
     * @param orderCreatedAt
     * @param orderUpdatedAt
     * @param id
     * @param idArray
     * @param actionType
     * @param actionTypeArray
     * @param trainingActionCode
     * @param trainingActionCodeArray
     * @param trainingActionProgram
     * @param trainingActionProgramArray
     * @param trainingActionProgramName
     * @param trainingSpecialityName
     * @param jobTitle
     * @param course
     * @param courseArray
     * @param courseName
     * @param learningOutcome
     * @param learningOutcomeArray
     * @param learningOutcomeCode
     * @param orderTrainingActionProgramName
     * @param orderCourseName
     * @param orderModulesName
     * @param orderLearningOutcomeCode
     * @param codePartial
     * @returns TrainingAction_taction_read_timestamps TrainingAction collection
     * @throws ApiError
     */
    public static apiTrainingActionsGetCollection(
        page: number = 1,
        itemsPerPage: number = 30,
        orderId: 'asc' | 'desc' = 'asc',
        orderActionType: 'asc' | 'desc' = 'asc',
        orderTrainingActionCode: 'asc' | 'desc' = 'asc',
        orderTrainingSpecialityName: 'asc' | 'desc' = 'asc',
        orderTrainingSpecialityCode: 'asc' | 'desc' = 'asc',
        orderStartDate: 'asc' | 'desc' = 'asc',
        orderEndDate: 'asc' | 'desc' = 'asc',
        orderJobTitle: 'asc' | 'desc' = 'asc',
        orderCreatedAt: 'asc' | 'desc' = 'asc',
        orderUpdatedAt: 'asc' | 'desc' = 'asc',
        id?: number,
        idArray?: Array<number>,
        actionType?: string,
        actionTypeArray?: Array<string>,
        trainingActionCode?: string,
        trainingActionCodeArray?: Array<string>,
        trainingActionProgram?: string,
        trainingActionProgramArray?: Array<string>,
        trainingActionProgramName?: string,
        trainingSpecialityName?: string,
        jobTitle?: string,
        course?: string,
        courseArray?: Array<string>,
        courseName?: string,
        learningOutcome?: string,
        learningOutcomeArray?: Array<string>,
        learningOutcomeCode?: string,
        orderTrainingActionProgramName: 'asc' | 'desc' = '',
        orderCourseName: 'asc' | 'desc' = '',
        orderModulesName: 'asc' | 'desc' = '',
        orderLearningOutcomeCode: 'asc' | 'desc' = '',
        codePartial?: string,
    ): CancelablePromise<Array<TrainingAction_taction_read_timestamps>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/training_actions',
            query: {
                'page': page,
                'itemsPerPage': itemsPerPage,
                'order[id]': orderId,
                'order[actionType]': orderActionType,
                'order[trainingActionCode]': orderTrainingActionCode,
                'order[trainingSpecialityName]': orderTrainingSpecialityName,
                'order[trainingSpecialityCode]': orderTrainingSpecialityCode,
                'order[startDate]': orderStartDate,
                'order[endDate]': orderEndDate,
                'order[jobTitle]': orderJobTitle,
                'order[createdAt]': orderCreatedAt,
                'order[updatedAt]': orderUpdatedAt,
                'id': id,
                'id[]': idArray,
                'actionType': actionType,
                'actionType[]': actionTypeArray,
                'trainingActionCode': trainingActionCode,
                'trainingActionCode[]': trainingActionCodeArray,
                'trainingActionProgram': trainingActionProgram,
                'trainingActionProgram[]': trainingActionProgramArray,
                'trainingActionProgram.name': trainingActionProgramName,
                'trainingSpecialityName': trainingSpecialityName,
                'jobTitle': jobTitle,
                'course': course,
                'course[]': courseArray,
                'course.name': courseName,
                'learningOutcome': learningOutcome,
                'learningOutcome[]': learningOutcomeArray,
                'learningOutcome.code': learningOutcomeCode,
                'order[trainingActionProgram.name]': orderTrainingActionProgramName,
                'order[course.name]': orderCourseName,
                'order[modules.name]': orderModulesName,
                'order[learningOutcome.code]': orderLearningOutcomeCode,
                'code_partial': codePartial,
            },
        });
    }
    /**
     * Creates a TrainingAction resource.
     * Creates a TrainingAction resource.
     * @param requestBody The new TrainingAction resource
     * @returns TrainingAction_taction_read_timestamps TrainingAction resource created
     * @throws ApiError
     */
    public static apiTrainingActionsPost(
        requestBody: TrainingAction_taction_write,
    ): CancelablePromise<TrainingAction_taction_read_timestamps> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/training_actions',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid input`,
                422: `Unprocessable entity`,
            },
        });
    }
    /**
     * Creates a TrainingAction resource.
     * Creates a TrainingAction resource.
     * @param formData The new TrainingAction resource
     * @returns TrainingAction_CsvImportResultDto_csv_read TrainingAction resource created
     * @throws ApiError
     */
    public static apiTrainingActionsimportPost(
        formData: TrainingAction_CsvFileRequestBodyDto_csv_write,
    ): CancelablePromise<TrainingAction_CsvImportResultDto_csv_read> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/training_actions/import',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Invalid input`,
                422: `Unprocessable entity`,
            },
        });
    }
    /**
     * Retrieves a TrainingAction resource.
     * Retrieves a TrainingAction resource.
     * @param id TrainingAction identifier
     * @returns TrainingAction_taction_read_timestamps TrainingAction resource
     * @throws ApiError
     */
    public static apiTrainingActionsIdGet(
        id: string,
    ): CancelablePromise<TrainingAction_taction_read_timestamps> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/training_actions/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * Replaces the TrainingAction resource.
     * Replaces the TrainingAction resource.
     * @param id TrainingAction identifier
     * @param requestBody The updated TrainingAction resource
     * @returns TrainingAction_taction_read_timestamps TrainingAction resource updated
     * @throws ApiError
     */
    public static apiTrainingActionsIdPut(
        id: string,
        requestBody: TrainingAction_taction_write,
    ): CancelablePromise<TrainingAction_taction_read_timestamps> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/training_actions/{id}',
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
     * Removes the TrainingAction resource.
     * Removes the TrainingAction resource.
     * @param id TrainingAction identifier
     * @returns void
     * @throws ApiError
     */
    public static apiTrainingActionsIdDelete(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/training_actions/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
}
