/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Company_company_write = {
    name: string;
    activity: string;
    numberOfWorkers: number;
    workersRepresentation?: boolean;
    nif: string;
    address: string;
    city: string;
    postalCode: string;
    tutorName?: string | null;
    tutorNif?: string | null;
    phone?: string | null;
    agreementCode?: string | null;
    signatureDate?: string | null;
    email: string;
    tutorMail?: string | null;
    tutorPhone?: string | null;
    country?: string | null;
    province?: string | null;
    legalNature?: Company_company_write.legalNature;
    tutorLastName?: string | null;
    representativeName?: string | null;
    representativeNif?: string | null;
    representativeMail?: string | null;
    representativePhone?: string | null;
    representativePosition?: string | null;
    representativeNormativeBasis?: Company_company_write.representativeNormativeBasis;
    representativeAppointedBy?: string | null;
    representativeName2?: string | null;
    representativeNif2?: string | null;
    representativeMail2?: string | null;
    representativePhone2?: string | null;
    representativePosition2?: string | null;
    representativeNormativeBasis2?: Company_company_write.representativeNormativeBasis2;
    representativeAppointedBy2?: string | null;
};
export namespace Company_company_write {
    export enum legalNature {
        ADMINISTRACI_N_Y_GESTI_N = 'Administración y Gestión',
        COMERCIO_Y_MARKETING = 'Comercio y Marketing',
        ELECTRICIDAD_Y_ELECTR_NICA = 'Electricidad y Electrónica',
        TRANSPORTE_Y_MANTENIMIENTO_DE_VEH_CULOS = 'Transporte y Mantenimiento de Vehículos',
    }
    export enum representativeNormativeBasis {
        LOS_PODERES_OTORGADOS_MEDIANTE_ESCRITURA_P_BLICA = 'Los poderes otorgados mediante escritura pública',
        LOS_PODERES_OTORGADOS_MEDIANTE_CONTRATO_PRIVADO = 'Los poderes otorgados mediante contrato privado',
        LOS_PODERES_OTORGADOS_POR_EL_MISMO = 'Los poderes otorgados por el mismo',
    }
    export enum representativeNormativeBasis2 {
        LOS_PODERES_OTORGADOS_MEDIANTE_ESCRITURA_P_BLICA = 'Los poderes otorgados mediante escritura pública',
        LOS_PODERES_OTORGADOS_MEDIANTE_CONTRATO_PRIVADO = 'Los poderes otorgados mediante contrato privado',
        LOS_PODERES_OTORGADOS_POR_EL_MISMO = 'Los poderes otorgados por el mismo',
    }
}

