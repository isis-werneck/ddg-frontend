/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type TrainingCycle_training_cycle_write = {
    code?: string;
    name?: string;
    professionalFamily?: string;
    regime?: TrainingCycle_training_cycle_write.regime;
};
export namespace TrainingCycle_training_cycle_write {
    export enum regime {
        INTENSIVO = 'Intensivo',
        GENERAL = 'General',
    }
}

