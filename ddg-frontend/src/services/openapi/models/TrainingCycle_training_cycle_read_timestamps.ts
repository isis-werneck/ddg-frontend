/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type TrainingCycle_training_cycle_read_timestamps = {
    readonly id?: number;
    code?: string;
    name?: string;
    professionalFamily?: string;
    regime?: TrainingCycle_training_cycle_read_timestamps.regime;
};
export namespace TrainingCycle_training_cycle_read_timestamps {
    export enum regime {
        INTENSIVO = 'Intensivo',
        GENERAL = 'General',
    }
}

