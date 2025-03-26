/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Student_CsvFileRequestBodyDto_csv_write } from '../models/Student_CsvFileRequestBodyDto_csv_write';
import type { Student_CsvImportResultDto_csv_read } from '../models/Student_CsvImportResultDto_csv_read';
import type { Student_student_read_timestamps } from '../models/Student_student_read_timestamps';
import type { Student_student_write } from '../models/Student_student_write';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class StudentService {
    /**
     * Retrieves the collection of Student resources.
     * Retrieves the collection of Student resources.
     * @param page The collection page number
     * @param itemsPerPage The number of items per page
     * @param id
     * @param idArray
     * @param fullName
     * @param document
     * @param course
     * @param courseArray
     * @param email
     * @param fileNumber
     * @param gender
     * @param genderArray
     * @param orderCourseName
     * @param orderId
     * @param orderName
     * @param orderFirstSurname
     * @param orderSecondSurname
     * @param orderFullName
     * @param orderAlias
     * @param orderStudentCode
     * @param orderDocument
     * @param orderFileNumber
     * @param orderUnit
     * @param orderRegistrationStatus
     * @param orderYearOfRegistration
     * @param orderDateOfRegistration
     * @param orderNumberOfRegistrationsThisYear
     * @param orderPhone
     * @param orderComments
     * @param orderGender
     * @param orderAddress
     * @param orderPostalCode
     * @param orderCity
     * @param orderProvince
     * @param orderBirthCity
     * @param orderBirthProvince
     * @param orderBirthCountry
     * @param orderBirthDate
     * @param orderAgeAtEndOfYear
     * @param orderNationality
     * @param orderEmergencyPhone
     * @param orderEmail
     * @param orderFirstGuardianDocument
     * @param orderFirstGuardianFirstSurname
     * @param orderFirstGuardianSecondSurname
     * @param orderFirstGuardianName
     * @param orderFirstGuardianGender
     * @param orderFirstGuardianPhone
     * @param orderFirstGuardianEmail
     * @param orderSecondGuardianDocument
     * @param orderSecondGuardianFirstSurname
     * @param orderSecondGuardianSecondSurname
     * @param orderSecondGuardianName
     * @param orderSecondGuardianGender
     * @param orderSecondGuardianPhone
     * @param orderSecondGuardianEmail
     * @param orderNp
     * @param orderNss
     * @returns Student_student_read_timestamps Student collection
     * @throws ApiError
     */
    public static apiStudentsGetCollection(
        page: number = 1,
        itemsPerPage: number = 30,
        id?: number,
        idArray?: Array<number>,
        fullName?: string,
        document?: string,
        course?: string,
        courseArray?: Array<string>,
        email?: string,
        fileNumber?: string,
        gender?: string,
        genderArray?: Array<string>,
        orderCourseName: 'asc' | 'desc' = 'asc',
        orderId: 'asc' | 'desc' = 'asc',
        orderName: 'asc' | 'desc' = 'asc',
        orderFirstSurname: 'asc' | 'desc' = 'asc',
        orderSecondSurname: 'asc' | 'desc' = 'asc',
        orderFullName: 'asc' | 'desc' = 'asc',
        orderAlias: 'asc' | 'desc' = 'asc',
        orderStudentCode: 'asc' | 'desc' = 'asc',
        orderDocument: 'asc' | 'desc' = 'asc',
        orderFileNumber: 'asc' | 'desc' = 'asc',
        orderUnit: 'asc' | 'desc' = 'asc',
        orderRegistrationStatus: 'asc' | 'desc' = 'asc',
        orderYearOfRegistration: 'asc' | 'desc' = 'asc',
        orderDateOfRegistration: 'asc' | 'desc' = 'asc',
        orderNumberOfRegistrationsThisYear: 'asc' | 'desc' = 'asc',
        orderPhone: 'asc' | 'desc' = 'asc',
        orderComments: 'asc' | 'desc' = 'asc',
        orderGender: 'asc' | 'desc' = 'asc',
        orderAddress: 'asc' | 'desc' = 'asc',
        orderPostalCode: 'asc' | 'desc' = 'asc',
        orderCity: 'asc' | 'desc' = 'asc',
        orderProvince: 'asc' | 'desc' = 'asc',
        orderBirthCity: 'asc' | 'desc' = 'asc',
        orderBirthProvince: 'asc' | 'desc' = 'asc',
        orderBirthCountry: 'asc' | 'desc' = 'asc',
        orderBirthDate: 'asc' | 'desc' = 'asc',
        orderAgeAtEndOfYear: 'asc' | 'desc' = 'asc',
        orderNationality: 'asc' | 'desc' = 'asc',
        orderEmergencyPhone: 'asc' | 'desc' = 'asc',
        orderEmail: 'asc' | 'desc' = 'asc',
        orderFirstGuardianDocument: 'asc' | 'desc' = 'asc',
        orderFirstGuardianFirstSurname: 'asc' | 'desc' = 'asc',
        orderFirstGuardianSecondSurname: 'asc' | 'desc' = 'asc',
        orderFirstGuardianName: 'asc' | 'desc' = 'asc',
        orderFirstGuardianGender: 'asc' | 'desc' = 'asc',
        orderFirstGuardianPhone: 'asc' | 'desc' = 'asc',
        orderFirstGuardianEmail: 'asc' | 'desc' = 'asc',
        orderSecondGuardianDocument: 'asc' | 'desc' = 'asc',
        orderSecondGuardianFirstSurname: 'asc' | 'desc' = 'asc',
        orderSecondGuardianSecondSurname: 'asc' | 'desc' = 'asc',
        orderSecondGuardianName: 'asc' | 'desc' = 'asc',
        orderSecondGuardianGender: 'asc' | 'desc' = 'asc',
        orderSecondGuardianPhone: 'asc' | 'desc' = 'asc',
        orderSecondGuardianEmail: 'asc' | 'desc' = 'asc',
        orderNp: 'asc' | 'desc' = 'asc',
        orderNss: 'asc' | 'desc' = 'asc',
    ): CancelablePromise<Array<Student_student_read_timestamps>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/students',
            query: {
                'page': page,
                'itemsPerPage': itemsPerPage,
                'id': id,
                'id[]': idArray,
                'fullName': fullName,
                'document': document,
                'course': course,
                'course[]': courseArray,
                'email': email,
                'fileNumber': fileNumber,
                'gender': gender,
                'gender[]': genderArray,
                'order[course.name]': orderCourseName,
                'order[id]': orderId,
                'order[name]': orderName,
                'order[firstSurname]': orderFirstSurname,
                'order[secondSurname]': orderSecondSurname,
                'order[fullName]': orderFullName,
                'order[alias]': orderAlias,
                'order[studentCode]': orderStudentCode,
                'order[document]': orderDocument,
                'order[fileNumber]': orderFileNumber,
                'order[unit]': orderUnit,
                'order[registrationStatus]': orderRegistrationStatus,
                'order[yearOfRegistration]': orderYearOfRegistration,
                'order[dateOfRegistration]': orderDateOfRegistration,
                'order[numberOfRegistrationsThisYear]': orderNumberOfRegistrationsThisYear,
                'order[phone]': orderPhone,
                'order[comments]': orderComments,
                'order[gender]': orderGender,
                'order[address]': orderAddress,
                'order[postalCode]': orderPostalCode,
                'order[city]': orderCity,
                'order[province]': orderProvince,
                'order[birthCity]': orderBirthCity,
                'order[birthProvince]': orderBirthProvince,
                'order[birthCountry]': orderBirthCountry,
                'order[birthDate]': orderBirthDate,
                'order[ageAtEndOfYear]': orderAgeAtEndOfYear,
                'order[nationality]': orderNationality,
                'order[emergencyPhone]': orderEmergencyPhone,
                'order[email]': orderEmail,
                'order[firstGuardianDocument]': orderFirstGuardianDocument,
                'order[firstGuardianFirstSurname]': orderFirstGuardianFirstSurname,
                'order[firstGuardianSecondSurname]': orderFirstGuardianSecondSurname,
                'order[firstGuardianName]': orderFirstGuardianName,
                'order[firstGuardianGender]': orderFirstGuardianGender,
                'order[firstGuardianPhone]': orderFirstGuardianPhone,
                'order[firstGuardianEmail]': orderFirstGuardianEmail,
                'order[secondGuardianDocument]': orderSecondGuardianDocument,
                'order[secondGuardianFirstSurname]': orderSecondGuardianFirstSurname,
                'order[secondGuardianSecondSurname]': orderSecondGuardianSecondSurname,
                'order[secondGuardianName]': orderSecondGuardianName,
                'order[secondGuardianGender]': orderSecondGuardianGender,
                'order[secondGuardianPhone]': orderSecondGuardianPhone,
                'order[secondGuardianEmail]': orderSecondGuardianEmail,
                'order[np]': orderNp,
                'order[nss]': orderNss,
            },
        });
    }
    /**
     * Creates a Student resource.
     * Creates a Student resource.
     * @param requestBody The new Student resource
     * @returns Student_student_read_timestamps Student resource created
     * @throws ApiError
     */
    public static apiStudentsPost(
        requestBody: Student_student_write,
    ): CancelablePromise<Student_student_read_timestamps> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/students',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid input`,
                422: `Unprocessable entity`,
            },
        });
    }
    /**
     * Creates a Student resource.
     * Creates a Student resource.
     * @param formData The new Student resource
     * @returns Student_CsvImportResultDto_csv_read Student resource created
     * @throws ApiError
     */
    public static apiStudentsimportPost(
        formData: Student_CsvFileRequestBodyDto_csv_write,
    ): CancelablePromise<Student_CsvImportResultDto_csv_read> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/students/import',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Invalid input`,
                422: `Unprocessable entity`,
            },
        });
    }
    /**
     * Retrieves a Student resource.
     * Retrieves a Student resource.
     * @param id Student identifier
     * @returns Student_student_read_timestamps Student resource
     * @throws ApiError
     */
    public static apiStudentsIdGet(
        id: string,
    ): CancelablePromise<Student_student_read_timestamps> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/students/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
    /**
     * Replaces the Student resource.
     * Replaces the Student resource.
     * @param id Student identifier
     * @param requestBody The updated Student resource
     * @returns Student_student_read_timestamps Student resource updated
     * @throws ApiError
     */
    public static apiStudentsIdPut(
        id: string,
        requestBody: Student_student_write,
    ): CancelablePromise<Student_student_read_timestamps> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/students/{id}',
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
     * Removes the Student resource.
     * Removes the Student resource.
     * @param id Student identifier
     * @returns void
     * @throws ApiError
     */
    public static apiStudentsIdDelete(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/students/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }
}
