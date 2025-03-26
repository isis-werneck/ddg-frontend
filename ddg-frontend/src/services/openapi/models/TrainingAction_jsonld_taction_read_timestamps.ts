/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type TrainingAction_jsonld_taction_read_timestamps = {
    readonly '@context'?: (string | Record<string, any>);
    readonly '@id'?: string;
    readonly '@type'?: string;
    readonly id?: number;
    actionType: TrainingAction_jsonld_taction_read_timestamps.actionType;
    trainingActionCode: string;
    trainingActionProgram?: string | null;
    trainingSpecialityName?: string | null;
    trainingSpecialityCode?: string | null;
    startDate?: string | null;
    endDate?: string | null;
    jobTitle?: string | null;
    course: string;
    learningOutcome: string;
    modules: Array<string>;
    createdAt?: string;
    updatedAt?: string;
};
export namespace TrainingAction_jsonld_taction_read_timestamps {
    export enum actionType {
        FFE_FP = 'FFE FP',
        FCT_SEPE = 'FCT SEPE',
    }
}

